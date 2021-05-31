import './Table.scss'

function Table({ children }) {
   return(
      <>
         <table>
            { children }
         </table>
      </>
   )
}

export default Table
