import DS from 'ember-data';

export default DS.Model.extend({
    repoName: DS.attr('string'),
    ownerName: DS.attr('string'),
    htmlURL: DS.attr('string'),
    URL: DS.attr('string'),
    readme: DS.belongsTo('repoReadme'),
    sha: DS.attr('string'),
});
