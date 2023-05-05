import React, { useState } from "react";
import FooterBottom from "../../components/footer/FooterBottom";
import LandBar from "../../components/LandingPagesComponents/LandBar";
import "./PlanningPages.css";

const PlanningPages = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weeksInMonth = [
    [
      <div>
        <p className="plann">
          {" "}
          HIIT <br />
          07:00 - 07:45 Coach Rami
        </p>
      </div>,
      <div>
        <p className="plann">Circuit training 14:30 - 15:15 Coach Bayrem</p>
      </div>,
      <div>
        <p className="plann">Circuit training 14:30 - 15:15 Coach Bayrem</p>
      </div>,
      <div>
        <p className="plann">100% Abdos 07:00 - 07:45 Coach Rami</p>
      </div>,
      <div>
        <p className="plann">Cross Training 16:00 - 16:45 Coach Amine</p>
      </div>,
      <div>
        <p className="plann">Circuit training 14:30 - 15:15 Coach Bayrem</p>
      </div>,
      <div>
        <p className="plann">Circuit training 14:30 - 15:15 Coach Bayrem</p>
      </div>,
    ],
    [
      <div>
        <p className="plann">Circuit training 14:30 - 15:15 Coach Bayrem</p>
      </div>,
      <div>
        <p className="plann">
          Spinning
          <br />
          15:15 - 16:00 Coach Yassine
        </p>
      </div>,
      <div>
        <p className="plann">Body Balance 14:30 - 15:15 Coach Houda</p>
      </div>,
      <div>
        <p className="plann">
          zumba <br /> 16:00 - 16:45 Coach Mariem
        </p>
      </div>,
      <div>
        <p className="plann">
          Pilate <br />
          16:00 - 16:45 Coach Ali
        </p>
      </div>,
      <div>
        <p className="plann">
          BOXE <br /> 21:30 - 22:15 Coach Ameur
        </p>
      </div>,
      <div>
        <p className="plann">
          zumba <br />
          14:30 - 15:15 Coach Mariem
        </p>
      </div>,
    ],
    [
      <div>
        <p className="plann">
          RPM <br />
          15:15 - 16:00 Coach Amine
        </p>
      </div>,
      <div>
        <p className="plann">
          CAF <br />
          15:15 - 16:00 Coach Bayrem
        </p>
      </div>,
      <div>
        <p className="plann">Body Combat 20:45 - 21:30 Coach Adem</p>
      </div>,
      <div>
        <p className="plann">100% Abdos 18:30 - 19:15 Coach Yassine</p>
      </div>,
      <div>
        <p className="plann">
          RPM <br />
          20:45 - 21:30 Coach Adem
        </p>
      </div>,
      null,
      null,
    ],
    [
      <div>
        <p className="plann">
          RPM <br />
          20:45 - 21:30 Coach Adem
        </p>
      </div>,
      null,
      null,
      <div>
        <p className="plann">
          Grit <br />
          21:30 - 22:15 Coach Adem
        </p>
      </div>,
      null,
      null,
      null,
    ],
  ];

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <LandBar />
      <div className="fullC">
        <div className="calendar">
          {days.map((day) => (
            <div className="calendar__day" key={day}>
              {day}
            </div>
          ))}
          {weeksInMonth.map((week, i) => (
            <React.Fragment key={i}>
              {week.map((day, j) => (
                <div
                  className={`calendar__day ${
                    day === selectedDay ? "calendar__day--selected" : ""
                  }`}
                  key={`${i}-${j}`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default PlanningPages;
