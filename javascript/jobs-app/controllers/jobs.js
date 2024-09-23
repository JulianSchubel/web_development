const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async(req, res) => {
    const jobs = await Job.find({createdBy: req.user.id}).sort('createdAt');;
    res.status(StatusCodes.OK).json({count: jobs.length, jobs});
}

const getJob = async(req, res) => {
    /* nested destructuring
     * ∙ pull user and params off of req object
     * ∙ pull id field off both
     * ∙ alias user.id as userId and params.id as jobId */
    const {user:{id: userId}, params: {id: jobId}} = req;
    const job = await Job.findOne({_id: jobId, createdBy: userId});

    if(!job) {
        throw BadRequestError(`No job with id ${jobId}`);
    }

    res.status(StatusCodes.OK).json(job);
}

const createJob = async(req, res) => {
    req.body.createdBy = req.user.id;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json(job);
}

const updateJob = async(req, res) => {
    const {
        user:{id: userId}, 
        params: {id: jobId},
        body: {company, position}
    } = req;

    if(company === "" || position === "") {
        throw new BadRequestError("Company or Position fields cannot be empty");
    }

    const job = await Job.findOneAndUpdate({_id: jobId, createdBy: userId}, req.body, {
        new: true,
        runValidators: true
    });

    if(!job) {
        throw BadRequestError(`No job with id ${jobId}`);
    }

    res.status(StatusCodes.OK).json(job);
}

const deleteJob = async(req, res) => {
    const {user:{id: userId}, params: {id: jobId}} = req;
    const job = await Job.findOneAndRemove({_id: jobId, createdBy: userId});

    if(!job) {
        throw BadRequestError(`No job with id ${jobId}`);
    }

    res.status(StatusCodes.OK).send();
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}
