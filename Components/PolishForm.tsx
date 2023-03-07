import Head from "next/head";
import React from "react";
import Link from "next/link";
import Style from "../Components/polishForm.module.scss";
import Image from "next/image";
import PassLogo from "../public/PassLogo.svg";
import HeroImage from "../public/HeroImage.png";
import Home from "../pages/Home";
// import your animation
import "animate.css";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import {
  faSearch,
  faChevronCircleDown,
  faCircleXmark,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

// import { useRouter } from "next/router";

const PolishForm = () => {
  return (
    <>
      <div className={Style.Nav}>
        <Link href="Home">
          <Image src={PassLogo} alt="PassLogo" className={Style.PassLogo} />
        </Link>
      </div>

      <div className={Style.container}>
        <div className={Style.header}>
          <h3>
            Your account has successfully activated,
            <br />
            let's polish your profile to stand out between your peers
          </h3>
          <h1>General Information</h1>
        </div>

        <div className={Style.grid}>
          <div className={`${Style.g1} ${Style.g1g}`}>
            <h5>First Name *</h5>
            <input type="text" className={Style.input} />
          </div>
          <div className={`${Style.g1} ${Style.g2g}`}>
            <h5>Last Name *</h5>
            <input type="text" className={Style.input} />
          </div>
          <div className={`${Style.g1} ${Style.g3g}`}>
            <h5>Level Of Experience *</h5>
            <select name="Experience" id="Experience">
              <option value="Entry-level">Entry-level</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior or executive-level">
                Senior or executive-level
              </option>
            </select>
          </div>
          <div className={`${Style.g1} ${Style.g4g}`}>
            <h5>Bio *</h5>
            <textarea
              id="Bio"
              name="Bio"
              placeholder="At pass.com you will learn how to make a resume."
            ></textarea>
          </div>
          <div className={`${Style.g1} ${Style.g5g}`}>
          <h5>Skill *</h5>

            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>

          <div className={`${Style.g1} ${Style.g6g}`}>
            
            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>
          <div className={`${Style.g1} ${Style.g7g}`}>
            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>
          <div className={`${Style.g1} ${Style.g8g}`}>
            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>
          <div className={`${Style.g1} ${Style.g9g}`}>
            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>
          <div className={`${Style.g1} ${Style.g10g}`}>
            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>
          <div className={`${Style.g1} ${Style.g11g}`}>
            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>
          <div className={`${Style.g1} ${Style.g12g}`}>
            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>
          <div className={`${Style.g1} ${Style.g13g}`}>
            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>
          <div className={`${Style.g1} ${Style.g14g}`}>
            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>
          <div className={`${Style.g1} ${Style.g15g}`}>
            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>
          <div className={`${Style.g1} ${Style.g16g}`}>
            <button className={Style.btn}>
              Front End
              <FontAwesomeIcon
                icon={faPlus}
                className={Style.FontAwesomeIcon}
              />
            </button>
          </div>
        </div>

        {/* <div className={Style.grid_3}>
            <div className={`${Style.g1} ${Style.g6g}`}>
              <div className={Style.g6_g1}>
                <h5>Interest *</h5>
                <button className={Style.btn}>
                  Java
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
              <div className={Style.g6_g2}>
                <button className={Style.btn}>
                  C
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
              <div className={Style.g6_g3}>
                <button className={Style.btn}>
                  PHP
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
              <div className={Style.g6_g4}>
                <button className={Style.btn}>
                  Haskell
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
              <div className={Style.g6_g5}>
                <button className={Style.btn}>
                  C++
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
              <div className={Style.g6_g6}>
                <button className={Style.btn}>
                  C#
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
              <div className={Style.g6_g7}>
                <button className={Style.btn}>
                  Go
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
              <div className={Style.g6_g8}>
                <button className={Style.btn}>
                  Python
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
              <div className={Style.g6_g9}>
                <button className={Style.btn}>
                  Swift
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
              <div className={Style.g6_g10}>
                <button className={Style.btn}>
                  Clojure
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
              <div className={Style.g6_g11}>
                <button className={Style.btn}>
                  JavaScript
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
              <div className={Style.g6_g12}>
                <button className={Style.btn}>
                  Ruby
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={Style.FontAwesomeIcon}
                  />
                </button>
              </div>
            </div>
            </div> */}
      </div>
    </>
  );
};

export default PolishForm;
