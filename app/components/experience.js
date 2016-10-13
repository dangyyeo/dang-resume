var React = require('react');
var resume = require('../resume.json');
import styles from  '../css/app.css';
require('font-awesome-webpack');

var Experience= React.createClass({
    render: function () {
        var arr = resume.experience;
        return (
            <section className={styles.education}>
                <div className={styles.title_icon}>
                    <i className="fa fa-tasks"></i>
                    <h3>
                        <span className={styles.sec_title_ch}>项目经历</span>
                        <span className={styles.sec_title_en}>Experience</span>
                    </h3>
                </div>
                <ul className={styles.timeline +" "+styles.experience}> 
                {
                    arr.map(function(item){
                        return ( 
                        <div>
                            <li className={styles.exp_icons}>
                                <i className="fa fa-tags"></i>
                                <section>
                                    <div className={styles.exp_icon}>
                                        <span className={styles.sec_small_title_ch}>{item.name}</span>
                                        <time>{item.start}~{item.end}</time>
                                    </div>
                                    <div className={styles.exp_list}>  
                                        <dl>
                                            <dt>{item.duty}</dt>
                                            {
                                                item.description.map(function(element){
                                                    return (<dd><i className="fa fa-cog"></i>{element}</dd>)
                                                })
                                            }
                                        </dl>                                         
                                    </div>
                                </section>
                            </li>
                        </div>
                        )
                    })
                }
                </ul>    
                
            </section>
        );
    }
});

module.exports = Experience;