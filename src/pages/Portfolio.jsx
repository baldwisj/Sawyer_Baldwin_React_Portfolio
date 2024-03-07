import React from 'react'
import Project from "../components/Project.jsx"
import cocktailFinder from '../../assets/cocktail_finder.png';
import culinaryCanvas from '../../assets/culinary_canvas.png';
import codingQuiz from '../../assets/coding_quiz.png';
import passwordGenerator from '../../assets/password_generator.png';
import noteTaker from '../../assets/note_taker.png';
import workDay from '../../assets/work_day_scheduler_screenshot.png';
//The following code creates a card for each project with values to be sent to the projects component
const Portfolio = () => {
  return (
    <div className="body container">
      <h1 className="text-center title">Portfolio</h1>
      <div className="row mb2">
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="https://baldwisj.github.io/cocktail_finder/"
            img={cocktailFinder}
            alt="Screenshot of the Cocktail Finder application"
            title="Cocktail Finder"
            repo="https://github.com/baldwisj/cocktail_finder"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="https://evening-reef-48573-57db96f3f837.herokuapp.com/"
            img={culinaryCanvas}
            alt="Screenshot of the Culinary Canvas application"
            title="Culinary Canvas"
            repo="https://github.com/baldwisj/Culinary-Canvas"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="https://baldwisj.github.io/coding_assessment_quiz/"
            img={codingQuiz}
            alt="Screenshot of the Coding Quiz application"
            title="Coding Quiz"
            repo="https://github.com/baldwisj/coding_assessment_quiz"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="https://github.com/baldwisj/random_password_generator"
            img={passwordGenerator}
            alt="Screenshot of the Password Generator application"
            title="Password Generator"
            repo="https://baldwisj.github.io/random_password_generator/"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="https://peaceful-caverns-50615-aa4d91b4bc23.herokuapp.com/"
            img={noteTaker}
            alt="Screenshot of the Note Taker application"
            title="Note Taker"
            repo="https://github.com/baldwisj/note_taker"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="https://peaceful-caverns-50615-aa4d91b4bc23.herokuapp.com/"
            img={workDay}
            alt="Screenshot of the Work Day Scheduler application"
            title="Work Day Scheduler"
            repo="https://github.com/baldwisj/note_taker"
          />
        </div>
      </div>
    </div>

  )
}

export default Portfolio