var React = require('react');
var resume = require('../resume.json');
import styles from  '../css/app.css';
require('font-awesome-webpack');

var Evaluate= React.createClass({
    render: function () {
        var arr = resume.education;
        return (
            <section className={styles.education}>
                <div className={styles.title_icon}>
                    <i className="fa fa-graduation-cap"></i>
                    <h3>
                        <span className={styles.sec_title_ch}>自我评价</span>
                        <span className={styles.sec_title_en}>Education</span>
                    </h3>
                </div>
                <div className={styles.timeline}> 
                {
                    arr.map(function(item){
                        return (                    
                            <div className={styles.school}>
                                <span>{item.name} ({item.type})</span>
                                <span>{item.major}</span>
                                <time>{item.start}~{item.end}</time>
                            </div>
                        )
                    })
                }
                </div>    
                
            </section>
        );
    }
});

module.exports = Evaluate;