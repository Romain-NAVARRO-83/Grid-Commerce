const csrfErrorHandler = (err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
        // CSRF token validation failed
        res.status(403).render('error/403', { pageType: "error", pageTitle: "This action is forbidden" });
    } else {
        // Other errors
        next(err);
    }
};

module.exports = csrfErrorHandler;
