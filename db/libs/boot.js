module.exports = app => app{
app.db.sync().done(() => {
app.listen(app.get("port"), () => {
console.log(`Your tasks API - "port ${app.get("port")}"`);
});
});
};