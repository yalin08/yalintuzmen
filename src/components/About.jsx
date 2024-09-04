import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaJsSquare, FaNodeJs, FaGit, FaGithub, FaSass } from 'react-icons/fa';
import { DiDotnet, DiJqueryLogo, DiUnitySmall, DiDatabase } from 'react-icons/di';
import { SiGodotengine, SiMysql } from "react-icons/si";
import { Link } from 'react-router-dom';
import '../style/About.scss';
import { useTranslation } from 'react-i18next';
const About = () => {
    const { t } = useTranslation();
    return (
        <div className='about'>
            <div className='container'>
                <div className='aboutCard'>
                    <div className='whoami'>
                        <h3>{t('about.whoAmi')}</h3>
                        <p>
                            {t('about.whoAmiDescription')}  </p>
                    </div>

                    <div className='skillset'>
                        <h3>{t('about.tech')}</h3>
                        <div className='skills'>

                            <div className='skill'>
                                <FaHtml5 size={40} color="#E44D26" title="HTML5" />
                                <p>HTML5</p>
                            </div>
                            <div className='skill'>
                                <FaCss3 size={40} color="#1572B6" title="CSS3" />
                                <p>CSS3</p>
                            </div>
                            <div className='skill'>
                                <DiDotnet size={40} color="#512BD4" title=".NET" />
                                <p>.NET</p>
                            </div>
                            <div className='skill'>
                                <FaJsSquare size={40} color="#F7DF1E" title="JavaScript" />
                                <p>JavaScript</p>
                            </div>
                            <div className='skill'>
                                <FaNodeJs size={40} color="#68A063" title="Node.js" />
                                <p>Node.js</p>
                            </div>
                            <div className='skill'>
                                <FaReact size={40} color="#61DAFB" title="React" />
                                <p>React</p>
                            </div>
                            <div className='skill'>
                                <DiJqueryLogo size={40} color="#0769AD" title="jQuery" />
                                <p>jQuery</p>
                            </div>
                            <div className='skill'>
                                <FaGit size={40} color="#F05032" title="Git" />
                                <p>Git</p>
                            </div>
                            <div className='skill'>
                                <FaGithub size={40} color="#181717" title="GitHub" />
                                <p>GitHub</p>
                            </div>
                            <div className='skill'>
                                <FaSass size={40} color="#CC6699" title="Sass" />
                                <p>Sass</p>
                            </div>
                            <div className='skill'>
                                <DiDatabase size={40} color="#003B5C" title="Microsoft SQL Server" />
                                <p>MSSQL</p>
                            </div>
                            <div className='skill'>
                                <SiMysql size={40} color="#4479A1" title="MySQL" />
                                <p>MySQL</p>
                            </div>
                            <div className='skill'>
                                <DiUnitySmall size={40} color="#000000" title="Unity" />
                                <p>Unity</p>
                            </div>

                            <div className='skill'>
                                <SiGodotengine size={40} color="#478cbf" title="Godot" />
                                <p>Godot</p>
                            </div>

                        </div>


                        <div className='button'>
                            <Link to="/contact">{t('about.contact')}</Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
