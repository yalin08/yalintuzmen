import React from 'react'
import eCommerce from '../assets/img/projects/eCommerce.png'
import hr from '../assets/img/projects/hr.png'
import portfolio from '../assets/img/projects/portfolio.png'
import '../style/Projects.scss'
import { useTranslation } from 'react-i18next';
const Projects = () => {
    const { t } = useTranslation();
    return (
        <div className='projects'>

            <div className='container'>

                <div className='project'>


                    <div className='projectImages'>
                        <img src={portfolio}></img>
                    </div>

                    <div className='projectDetails'>

                        <div className='projectName'>
                            <h3>{t('projects.portfolio')}</h3>
                        </div>
                        <div className='projectDescription'>
                            <pre>
                                {t('projects.portfolioContent')} </pre>
                        </div>


                        <div className='buttons'>
                            <div className='button'>
                                <a href="https://github.com/yalin08/yalintuzmen">{t('projects.githubLink')} (Front End)</a>
                            </div>
                            <div className='button'>
                                <a href="https://github.com/yalin08/PortfolioBlogApi">{t('projects.githubLink')} (Web API)</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='project'>


                    <div className='projectImages'>
                        <img src={hr}></img>
                    </div>

                    <div className='projectDetails'>

                        <div className='projectName'>
                            <h3>{t('projects.hrProject')}</h3>
                        </div>
                        <div className='projectDescription'>
                            <pre>
                                {t('projects.hrContent')} </pre>
                        </div>


                        <div className='buttons'>
                            <div className='button'>
                                <a href="https://github.com/yalin08/Human-Resource-project">{t('projects.githubLink')}</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='project'>


                    <div className='projectImages'>
                        <img src={eCommerce}></img>
                    </div>

                    <div className='projectDetails'>

                        <div className='projectName'>
                            <h3>{t('projects.eCommerce')}</h3>
                        </div>
                        <div className='projectDescription'>
                            <pre>
                                {t('projects.eCommerceContent')} </pre>
                        </div>


                        <div className='buttons'>
                            <div className='button'>
                                <a href="https://github.com/furkan-yigit/ETicaretPlatformu">{t('projects.githubLink')}</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Projects