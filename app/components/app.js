/**
 * Created by DangYang on 2016/10/6.
 */
var React = require('react');
var styles =require('../css/app.css');
var Resumehead = require('./Resumehead.js');
var Education = require('./education.js');
var Experience = require('./experience.js');
var Skill = require('./skills.js');

var tab1= React.createClass({
    render: function () {
        return (
            <div className={styles.wrap}>
                <Resumehead/>
                <div className={styles.cont}>
                    <Education/>
                	<Experience/>
                    <Skill/>
                </div>
                
            </div>
        );
    }
});
module.exports = tab1;