const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
    const {search} = req.query;
    res.status(200).json({products, nbHits: products.length});
};

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query;
    const queryObject = {};

    // Setup queryObject
    if( featured ) {
        queryObject.featured = featured === "true" ? true : false;
    }

    if( company ) {
        queryObject.company = {$regex: company, $options: 'i'};
    }

    if( name ) {
        queryObject.name = {$regex: name, $options: 'i'};
    }

    if( numericFilters ) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte'
        }
        const re = /\b(<|>|<=|>=|=)\b/g;
        const options = ['price', 'rating'];
        let filters = numericFilters.replace(re, (match) => `-${operatorMap[match]}-`);
        filters = filters.split(',').forEach( (item) => {
            const [field, operator, value] = item.split('-');
            if(options.includes(field)) {
                queryObject[field] = { [operator] : Number(value) };
            }
        })
    }

    console.log(queryObject);
    let result = Product.find(queryObject);

    if( fields ) {
        const fieldList = fields.split(',').join(' ');
        result.select(fieldList);
    }
    if( sort ) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    } else {
        /* filter by default by createdAt */
        result = result.sort("createdAt");
    }

    // Paging
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);
    const products = await result;
    res.status(200).json({products, nbHits: products.length });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic
}
