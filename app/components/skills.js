var React = require('react');
var resume = require('../resume.json');
import styles from  '../css/app.css';
require('font-awesome-webpack');

var Skill= React.createClass({
    render: function () {
        var arr = resume.skills;
        return (
            <section className={styles.education}>
                <div className={styles.title_icon}>
                    <i className="fa fa-paperclip"></i>
                    <h3>
                        <span className={styles.sec_title_ch}>相关技能</span>
                        <span className={styles.sec_title_en}>Skills</span>
                    </h3>
                </div>
                <div className={styles.timeline}>
                    <div className={styles.skills}>
                    {
                        arr.map(function(item){
                            return (
                                <div className={styles.exp_list+" "+styles.skill_list}>  
                                    <dl>
                                        <dt>{item.name}</dt>
                                        {
                                            item.description.map(function(element){
                                                return (<dd><i className="fa fa-asterisk"></i>{element}</dd>)
                                            })
                                        }
                                    </dl>                                         
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                
            </section>
        );
    }
});

module.exports = Skill;