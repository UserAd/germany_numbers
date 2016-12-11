import React, { PropTypes } from 'react'

const PaginationComponent = ({total_pages, current_page, onClick}) => {

    let pages_links = []

    if(total_pages > 1) {
      
      if (total_pages < 10) {
        for (let i=0; i < total_pages; i++) {
          if (i == current_page) {
            pages_links.push(<li className="active" key={i}><span>{i + 1}</span></li>)
          } else {
            pages_links.push(<li onClick={e => {e.preventDefault(); onClick(i)}} key={i}><a href="#">{i + 1}</a></li>)
          }
        }
      } else {

        let start = Math.max(0, current_page - 5)
        let finish = Math.min(start + 10, total_pages)

        if (start > 0) {
          pages_links.push(<li onClick={e => {e.preventDefault(); onClick(0)}} key={0}><a href="#">1</a></li>)        
          if (start > 1) {
            pages_links.push(<li key="spanleft"><span>..</span></li>)
          }
        }

        for (let i=start; i < finish; i++) {
          if (i == current_page) {
            pages_links.push(<li className="active" key={i}><span>{i + 1}</span></li>)
          } else {
            pages_links.push(<li onClick={e => {e.preventDefault(); onClick(i)}} key={i}><a href="#">{i + 1}</a></li>)
          }
        }

        if (finish < total_pages) {
          if(finish - total_pages < -1) {
            pages_links.push(<li key="spanright"><span>..</span></li>)
          }
          
          pages_links.push(<li onClick={e => {e.preventDefault(); onClick(total_pages - 1)}} key={total_pages - 1}><a href="#">{total_pages}</a></li>)        
        }
      }
    }
  

    return (
      <ul className="pagination pagination-sm">
        {pages_links}        
      </ul>
    )
}

PaginationComponent.propTypes = {
  total_pages: PropTypes.number.isRequired,
  current_page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PaginationComponent
