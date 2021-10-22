import React from 'react';
import './MainPage.scss';
import { FaFreeCodeCamp } from 'react-icons/fa';

function MainPage() {
  return (
    <div className='.container-fluid'>
      <div className='row'>
        <div className='col-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
          faucibus
        </div>
        <div className='col-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
          faucibus ornare s
        </div>
        <div className='col-xl'>
          ColuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
          faucibus
        </div>
        <div className='col-sm'>
          <div className='card text-dark bg-light h-100'>
            <img
              src='...'
              className='card-img-top'
              alt='a nice image of my project'
            />
            <div className='card-body'>
              <h5 className='card-title'>Love-Project</h5>
              <p className='card-text'>
                ColuLorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className='card-footer'>
              <a href='#' className='card-link'>
                Link
              </a>
              <a href='#' className='card-link'>
                another Link
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card text-dark bg-light h-100'>
            <img
              src='...'
              className='card-img-top'
              alt='a nice image of my project'
            />
            <div className='card-body'>
              <h5 className='card-title'>Love-Project</h5>
              <p className='card-text'>
                ColuLorem ipsum dolor sit amet, consectetur adipiscing elit
                sdfsdfsdf sdf sdf sdf sdf sdf sdf sdf sdf sdf,
              </p>
              <FaFreeCodeCamp size='2em' />
            </div>
            <div className='card-footer'>
              <a href='#' className='card-link'>
                Link
              </a>
              <a href='#' className='card-link'>
                another Link
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-header'>Nice list</div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>First item</li>
              <li className='list-group-item'>Second item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Odio facilisis mauris sit amet massa vitae tortor. Ac ut consequat semper viverra nam libero justo laoreet. Cras ornare arcu dui vivamus arcu. Aliquet enim */
