import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchStyles.css';
import { Icon, IconButton } from "@material-ui/core";

const SearchbarDropdown = (props) => {
    const { options, onInputChange } = props;
    const ulRef = useRef();
    const inputRef = useRef();

    const goToPage = (choice) => {
        if (choice.includes('big brothers big sisters')) {
            window.location.href = 'https://www.bbbsps.org/';
        }
        else if (choice.includes('act against hunger')) {
            window.location.href = 'https://www.actionagainsthunger.org/';
        }
        else if (choice.includes('akron-canton')) {
            window.location.href = 'https://www.akroncantonfoodbank.org/';
        }
        else if (choice.includes('arm in arm')) {
            window.location.href = 'https://arminarm.org/';
        }
        else if (choice.includes('active minds')) {
            window.location.href = 'https://www.activeminds.org/'; 
        }
        else if (choice.includes('bike works seattle')) {
            window.location.href = 'https://bikeworks.org/';
        }
        else if (choice.includes('ace scholarships')) {
            window.location.href = 'https://www.acescholarships.org/';
        }
        else if (choice.includes('adoptaclassroom')) {
            window.location.href = 'https://AdoptAClassroom.org'; 
        }
        else if (choice.includes('page ahead children')) {
            window.location.href = 'http://www.pageahead.org/'
        }
        else if (choice.includes('madre')) {
            window.location.href = 'https://www.madre.org/';
        }
        else if (choice.includes('beyond borders')) {
            window.location.href = 'https://www.beyondborders.net';
        }
        else if (choice.includes('anitab')) {
            window.location.href = 'https://www.anitaborg.org';
        }
        else if (choice.includes('dress for success')) {
            window.location.href = 'https://www.dfshouston.org/';
        }
        else if (choice.includes('equality now')) {
            window.location.href = 'https://www.equalitynow.org/';
        }
        else if (choice.includes('capital idea')) {
            window.location.href = 'https://www.capitalidea.org';
        }
        else if (choice.includes('boston chinatown')) {
            window.location.href = 'https://bcnc.net/';
        }
        else if (choice.includes('zoo atlanta')) {
            window.location.href = 'https://zooatlanta.org/';
        }
        else if (choice.includes('the adirondack')) {
            window.location.href = 'https://www.adirondackcouncil.org/';
        }
        else if (choice.includes('north cascades')) {
            window.location.href = 'https://ncascades.org/';
        }
        else if (choice.includes('washington trails')) {
            window.location.href = 'https://www.wta.org/';
        }
        else if (choice.includes('coalition for rainforest')) {
            window.location.href = 'https://www.rainforestcoalition.org/';
        }
    };

    useEffect(() => {
      inputRef.current.addEventListener('click', (event) => {
        event.stopPropagation();
        ulRef.current.style.display = 'flex';
        onInputChange(event);
      });
      document.getElementById('results').addEventListener('click', () => {
        ulRef.current.style.display = 'none';
      });
    }, []);

    return (
      <div className="search-bar-dropdown" id ="dropDown">
        <input
          id="search-bar"
          type="text"
          className="form-control"
          placeholder="Search for nonprofits..."
          ref={inputRef}
          onChange={onInputChange}
        />
        <ul id="results" className="list-group" ref={ulRef}>
          {options.map((option, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={(e) => {
                  inputRef.current.value = option;
                  goToPage(option);
                }}
                className="list-group-item list-group-item-action"
              >
                {option}
              </button>
            );
          })}
        </ul>
      </div>
    );
  };
  
  const defaultOptions = [
      'big brothers big sisters of puget sound',
      'act against hunger',
      'akron-canton regional foodbank',
      'arm in arm',
      'active minds',
      'bike works seattle',
      'ace scholarships',
      'adoptaclassroom.org',
      'page ahead children\'s literacy program',
      'madre',
      'beyond borders',
      'anitab.org',
      'dress for success houston',
      'equality now',
      'capital idea',
      'dress for success houston',
      'boston chinatown neigborhood center',
      'zoo atlanta',
      'the adirondack council',
      'north cascades institute',
      'washington trails association',
      'coalition for rainforest nations',
      'the advocates for human rights',
  ];
  

function SearchBar() {
    const [options, setOptions] = useState([]);
    const onInputChange = (event) => {
      setOptions(
        defaultOptions.filter((option) => option.includes(event.target.value.toLowerCase()))
      );
    };
  
    return (
      <div id = 'container'>
        <h1>Looking for a nonprofit?</h1>
        <SearchbarDropdown options={options} onInputChange={onInputChange} 
        />
        {/* <IconButton id = 'searchIcon'>
            <Icon>search</Icon>
        </IconButton> */}
      </div>
    );
  }

export default SearchBar;