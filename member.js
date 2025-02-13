function skillsMember() {
    var member = this;
    var skills = this.skills;
    var skillsArr = Object.keys(skills);
    var skillsArrLength = skillsArr.length;
    var i = 0;
    var skill = null;
    var skillName = null;
    var skillLevel = null;
    var skillLevelArr = null;
    var skillLevelArrLength = 0;
    var skillLevelObj = null;
    var skillLevelObjLength = 0;
    var skillLevelObjKey = null;
    var skillLevelObjValue = null;
    var skillLevelArrIndex = 0;
    var skillLevelObjIndex = 0;

    for (i = 0; i < skillsArrLength; i++) {
        skill = skillsArr[i];
        skillName = skill;
        skillLevel = skills[skill];
        skillLevelArr = skillLevel.split(',');
        skillLevelArrLength = skillLevelArr.length;
        skillLevelObj = {};
        for (skillLevelArrIndex = 0; skillLevelArrIndex < skillLevelArrLength; skillLevelArrIndex++) {
            skillLevelObjKey = skillLevelArr[skillLevelArrIndex].split(':')[0];
            skillLevelObjValue = skillLevelArr[skillLevelArrIndex].split(':')[1];
            skillLevelObj[skillLevelObjKey] = skillLevelObjValue;
        }
        member[skillName] = skillLevelObj;
    }
}