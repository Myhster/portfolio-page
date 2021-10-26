import React from 'react';
import './MainPage.scss';
import quoteMa from './quote-machine2.png';
import calc from './calculator.png';
import mark from './markdown.png';
import clock from './clock.png';
import drum from './drum.png';

import { FaFreeCodeCamp, FaGithub } from 'react-icons/fa';
import { SiReplit } from 'react-icons/si';

function MainPage() {
  return (
    <div className='total'>
      <div className='container' id='first'>
        <p>
          <br />
        </p>
        <h1>Hi, nice to have you here</h1>

        <p>
          I'm a berlin-based self-taught programmer with a passion for learning.
          <br />
          <br />
          I have a strong interest in Python and JavaScript, building my apps
          with Django and React. Recently I fell in love with TDD and I'm trying
          to incorporate it into my workflow.
          <br />
          <br />
          This page is dedicated to the projects I have finished over the last
          several months, following the curriculum of FreeCodeCamp and other
          resources.
        </p>
      </div>
      <div className='container'>
        <h2 id='reactProjects'>React-Projects</h2>
        <div className='row gy-1'>
          {/* 25-5-Clock-------------------------------------------------*/}
          <div className='col-sm'>
            <div className='card text-dark bg-light'>
              <a
                href='https://myhster.github.io/25-5-Clock'
                className='card-link'
                target='_blank'
              >
                <img
                  src={clock}
                  className='card-img-top'
                  alt='a nice image of my project'
                />
              </a>
              <div className='card-body'>
                <h5 className='card-title'>25-5-Clock</h5>
                <p className='card-text'>
                  A pomodoro timer. Change the length of break and session times
                  and reset the clock if needed.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/front-end-development-libraries'
                  className='card-link'
                  target='_blank'
                >
                  <FaFreeCodeCamp size='2em' />
                </a>
                <a
                  href='https://github.com/Myhster/25-5-Clock'
                  className='card-link'
                  target='_blank'
                >
                  <FaGithub size='1.5em' />
                </a>
              </div>
            </div>
          </div>
          {/* Calc-------------------------------------------------*/}
          <div className='col-sm'>
            <div className='card text-dark bg-light'>
              <a
                href='https://myhster.github.io/calculator'
                className='card-link'
                target='_blank'
              >
                <img
                  src={calc}
                  className='card-img-top'
                  alt='image of the calculator app'
                />
              </a>
              <div className='card-body'>
                <h5 className='card-title'>Calculator</h5>
                <p className='card-text'>
                  Calculator with immediate execution logic
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/front-end-development-libraries'
                  className='card-link'
                  target='_blank'
                >
                  <FaFreeCodeCamp size='2em' />
                </a>
                <a
                  href='https://github.com/Myhster/calculator'
                  className='card-link'
                  target='_blank'
                >
                  <FaGithub size='1.5em' />
                </a>
              </div>
            </div>
          </div>
          {/* Markdown-------------------------------------------------*/}
          <div className='col-sm'>
            <div className='card text-dark bg-light '>
              <a
                href='https://myhster.github.io/markdown-previewer'
                className='card-link'
                target='_blank'
              >
                <img
                  src={mark}
                  className='card-img-top'
                  alt='a nice image of my project'
                />
              </a>
              <div className='card-body'>
                <h5 className='card-title'>Markdown Previewer</h5>
                <p className='card-text'>
                  Transforms markdown language into formated text
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/front-end-development-libraries'
                  className='card-link'
                  target='_blank'
                >
                  <FaFreeCodeCamp size='2em' />
                </a>
                <a
                  href='https://github.com/Myhster/markdown-previewer'
                  className='card-link'
                  target='_blank'
                >
                  <FaGithub size='1.5em' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row gy-2'>
          {/* QuoteMachine-------------------------------------------------*/}

          <div className='col-sm'>
            <div className='card text-dark bg-light'>
              <a
                href='https://myhster.github.io/random-quote-machine'
                className='card-link'
                target='_blank'
              >
                <img
                  src={quoteMa}
                  className='card-img-top'
                  alt='image of random quote machine'
                />
              </a>
              <div className='card-body'>
                <h5 className='card-title'>Random Quote Machine</h5>
                <p className='card-text'>
                  Quote generator with changing colors and tweet functionality
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/front-end-development-libraries'
                  className='card-link'
                  target='_blank'
                >
                  <FaFreeCodeCamp size='2em' />
                </a>
                <a
                  href='https://github.com/Myhster/random-quote-machine'
                  className='card-link'
                  target='_blank'
                >
                  <FaGithub size='1.5em' />
                </a>
              </div>
            </div>
          </div>

          {/* Drum Machine-------------------------------------------------*/}
          <div className='col-sm'>
            <div className='card text-dark bg-light'>
              <a
                href='https://myhster.github.io/drum-machine'
                className='card-link'
                target='_blank'
              >
                <img
                  src={drum}
                  className='card-img-top'
                  alt='a nice image of my project'
                />
              </a>
              <div className='card-body'>
                <h5 className='card-title'>Drum Machine</h5>
                <p className='card-text'>
                  Click the pads or press the coresponding keys to create some
                  sounds
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/front-end-development-libraries'
                  className='card-link'
                  target='_blank'
                >
                  <FaFreeCodeCamp size='2em' />
                </a>
                <a
                  href='https://github.com/Myhster/drum-machine'
                  className='card-link'
                  target='_blank'
                >
                  <FaGithub size='1.5em' />
                </a>
              </div>
            </div>
          </div>
          {/* Drum Machine-------------------------------------------------*/}
          <div className='col-sm'></div>
        </div>
      </div>
      <div className='container' id='javascriptAndPython'>
        <h2>JavaScript and Python</h2>
        <div className='row gy-2'>
          <div className='col-sm'>
            <div className='card  h-100'>
              <div className='card-header'>
                <h4>List of completed JS projects</h4>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Palindrome Checker</li>
                <li className='list-group-item'>Roman Numeral Converter</li>
                <li className='list-group-item'>Caesars Cipher</li>
                <li className='list-group-item'>Telephone Num. Validator</li>
                <li className='list-group-item'>Cash Register</li>
              </ul>
              <div className='card-footer'>
                <a
                  href='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/javascript-algorithms-and-data-structures'
                  className='card-link'
                  target='_blank'
                >
                  <FaFreeCodeCamp size='2em' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div className='card h-100'>
              <div className='card-header'>
                <h4>List of completed Python projects</h4>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  Arithmetic Formatter{' '}
                  <a
                    href='https://replit.com/@Bobolove/boilerplate-arithmetic-formatter'
                    target='_blank'
                  >
                    <SiReplit />
                  </a>
                </li>
                <li className='list-group-item'>
                  Time Calculator{' '}
                  <a
                    href='https://replit.com/@Bobolove/boilerplate-time-calculator'
                    target='_blank'
                  >
                    <SiReplit />
                  </a>
                </li>
                <li className='list-group-item'>
                  Budget App{' '}
                  <a
                    href='https://replit.com/@Bobolove/boilerplate-budget-app'
                    target='_blank'
                  >
                    <SiReplit />
                  </a>
                </li>
                <li className='list-group-item'>
                  Polygon Area Calculator{' '}
                  <a
                    href='https://replit.com/@Bobolove/boilerplate-polygon-area-calculator-2'
                    target='_blank'
                  >
                    <SiReplit />
                  </a>
                </li>
                <li className='list-group-item'>
                  Probability Calculator{' '}
                  <a
                    href='https://replit.com/@Bobolove/boilerplate-probability-calculator'
                    target='_blank'
                  >
                    <SiReplit />
                  </a>
                </li>
              </ul>
              <div className='card-footer'>
                <a
                  href='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/scientific-computing-with-python-v7'
                  className='card-link'
                  target='_blank'
                >
                  <FaFreeCodeCamp size='2em' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-sm'></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Odio facilisis mauris sit amet massa vitae tortor. Ac ut consequat semper viverra nam libero justo laoreet. Cras ornare arcu dui vivamus arcu. Aliquet enim */
