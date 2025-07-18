const handleGetRequest = (req, res) => {
    res.send('I am get request.');
};

const handlePostRequest = (req, res) => {
    res.send('I am post request.');
};

module.exports = {
    handleGetRequest,
    handlePostRequest
};