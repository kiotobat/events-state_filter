import { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import data from '../../data/data.json'; // Список картинок
import './portfolio.css';

const filters = ['All', 'Websites', 'Flayers', 'Business Cards']; // Список всех фильтров

const Portfolio = () => {
  const [selected, setSelected] = useState('All'); // Выбранный фильтр
  const [images, setImages] = useState(data); // Отображаемые картинки

  const handler = (clickedFilter) => {
    setSelected(clickedFilter);
    setImages(
      clickedFilter === 'All'
        ? data
        : data.filter((el) => el.category === clickedFilter)
    );
  };

  return (
    <div className="portfolio">
      <Toolbar filters={filters} selected={selected} onSelectFilter={handler} />
      <ProjectList projects={images} />
    </div>
  );
};

export default Portfolio;
