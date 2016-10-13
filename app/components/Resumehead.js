var React = require('react');
var resume = require('../resume.json');
import styles from  '../css/app.css';
require('font-awesome-webpack');

var Resumehead= React.createClass({
    render: function () {
        // var md = new Remarkable();
        return (
            <header className={styles.headflex}>
                <section className={styles.titleName}>
                    <h1>{resume.name}</h1>
                    <h2>{resume.job}</h2>
                </section>
                <section className={styles.contact}>
                    <ul>
                        { 
                            resume.contact.map(function(item){
                                return <li><i className={item.icon}></i><a href={item.url}>{item.urlText}</a></li>
                           })
                        }
                            </ul>
                </section>
            </header>
        );
    }
});

module.exports = Resumehead;