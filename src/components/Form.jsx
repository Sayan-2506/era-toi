import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Context } from '../index';
import { message } from "antd";
import Spinner from "./Spinner";


const Form = () => {
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const { store } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const success = () => {
    message.success('Рахмет!');
  };

  const error = () => {
    message.error('Осындай есіммен қонақ бар!');
  };


  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const sendData = (event) => {
    event.preventDefault();
    let data = new FormData();
    if(name && selectedOption) {
        data.append('name', name);
        data.append(selectedOption, true);
        setLoading(true);
        store.ComePeople({name: data.get('name'), [selectedOption]: true})
        .then((result) => {
          setLoading(false);
          if (result?.error) {
            error();
          } else if (result?.success) {
            success();
          }
        })
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className="m-auto mt-20 px-8 w-full max-w-[600px] h-full flex flex-col text-slate-700"
    >
      <motion.h3
        custom={1}
        variants={textAnimation}
        className="text-base text-center font-medium mb-6"
      >
        Тойға келесіз бе?
      </motion.h3>
      {loading && <Spinner />}
      <form onSubmit={sendData}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_name"
            id="floating_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Аты-жөніңізді жазыңыз
          </label>
        </div>
        <fieldset>
          <div className="flex items-center mb-4">
            <motion.input
              custom={1}
              variants={textAnimation}
              id="country-option-1"
              type="radio"
              name="countries"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              value="coming"
              checked={selectedOption === 'coming'}
              onChange={handleOptionChange}
              required
            />
            <motion.label
              custom={1}
              variants={textAnimation}
              for="country-option-1"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Келемін, бұйырса
            </motion.label>
          </div>

          <div className="flex items-center mb-4">
            <motion.input
              custom={2}
              variants={textAnimation}
              id="country-option-2"
              type="radio"
              name="countries"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              value="spouse"
              checked={selectedOption === 'spouse'}
              onChange={handleOptionChange}
              required
            />
            <motion.label
              custom={2}
              variants={textAnimation}
              for="country-option-2"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Жұбайыммен барамын
            </motion.label>
          </div>

          <div className="flex items-center">
            <motion.input
              custom={3}
              variants={textAnimation}
              id="country-option-3"
              type="radio"
              name="countries"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              value="I_cant_come"
              checked={selectedOption === 'I_cant_come'}
              onChange={handleOptionChange}
              required
            />
            <motion.label
              custom={3}
              variants={textAnimation}
              for="country-option-3"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Өкінішке орай, келе алмаймын
            </motion.label>
          </div>
        </fieldset>
        <button
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 text-white"
        >
          Жіберу
        </button>
      </form>
    </motion.div>
  );
};

export default Form;
