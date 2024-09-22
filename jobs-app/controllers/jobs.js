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

    res.status(StatusCodes.OK).json(job);
}

const createJob = async(req, res) => {
    req.body.createdBy = req.user.id;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json(job);
}

const updateJob = async(req, res) => {
    res.send('update job');
}

const deleteJob = async(req, res) => {
    res.send('delete job');
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}
