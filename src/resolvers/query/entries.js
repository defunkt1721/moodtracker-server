const Entry = require('../../models/entry');
const { populateUser, transformData } = require('../util');

module.exports = {
    entries: async () => {
        const result = await Entry.find();
        return result.map(entry => ({
            ...transformData(entry),
            addedBy: populateUser.bind(this, entry._doc.addedBy),
        }));
    },
};
