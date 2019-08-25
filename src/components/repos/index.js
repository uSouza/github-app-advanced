'use strict'

import React, { PropTypes } from 'react'
import './repos.css'
import Pagination from 'components/pagination'

const Repos = ({ className, title, repos, handlePagination }) => (
  <div className={`repos-list ${className}`}>
    <h2>{title}</h2>
    <ul>
      {repos.repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
    <Pagination total={repos.pagination.total} activePage={repos.pagination.activePage} onClick={handlePagination} />
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    pagination: PropTypes.shape({
      total: PropTypes.number,
      activePage: PropTypes.number
    }).isRequired
  }),
  handlePagination: PropTypes.func.isRequired
}

export default Repos
