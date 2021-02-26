/** @jsxImportSource theme-ui */
import { useState } from 'react'

//index.js
// ...
// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <Dealer />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//make an "enum" for all the cards so we don't have to rely on string matching later
const allCards = {
  0: 'godzilla',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: ''
}

//let's bracket for now how we're going to select cards to be on the board for a particular round. there are lots of ways to do this and it doesn't really involve state.
const Dealer = () => {
  //some function for selecting cards for this round
  const inPlay = chooseRandom(allCards, 6)
  //some function for cloning each card and shuffling them; returns an object like:
  // {
  //   0: {value:'godzilla',faceUp:false},
  //   1: {value:'another monster',faceUp:false},
  //   2: {value:'monster',faceUp:false},
  //   3: {value:'something',faceUp:false},
  //   4: {value:'something',faceUp:false},
  //   5: {value:'something',faceUp:false},
  //   6: {value:'monster',faceUp:false},
  //   7: {value:'godzilla',faceUp:false},
  //   8: {value:'something',faceUp:false},
  //   9: {value:'something',faceUp:false},
  //   10: {value:'something',faceUp:false},
  //   11: {value:'another monster',faceUp:false},
  // }
  const deck = pairAndShuffle(inPlay)
  //for now I'm calling the Controller Turn to indicate that we're only handling the state logic for a single turn; later we can refactor so that the controller also tracks game state like which player's turn it is, etc.
  return <Turn deck={deck}/>
}

const setBoardState = (state, action) => {
  switch (action.type) {
    case 'FLIPUP':
      return {...state, [action.i]:{...action.i, faceUp:true}}
    case 'FLIPDOWN':
      const allDown = Object.keys(state)
        .map(card => {return{...state[card], faceUp: false}})
        .reduce((acc, card, i) => Object.assign(acc, { [i]: card }), {})
      return allDown
    case 'REMOVE':
      return {...state, [action.i]:{...action.i, value:null}, [action.j]:{...action.j, value:null}}
    default:

  }
}

const Turn = ({ deck }) => {
  const [board, updateBoard] = useReducer(setBoardState, deck)
  const firstFlip = useRef(null)

  //a function that checks to see if the turn was a match or not and updates the board accordingly then
  const resolveTurn = (value, i) => {
    if (firstFlip.current) {
      if (firstFlip.current.value === value) {
        //yay you got a match!
        updateBoard({type:'REMOVE', i:firstFlip.current.i, j:i})
      }
      //sorry wrong
      updateBoard({type:'FLIPDOWN'})
      firstFlip.current = null
      return
    }
    firstFlip.current = {value: value, i: i}
  }

  //return a Layout that has all our UI components as children
  return <Layout board={board} updateBoard={updateBoard}/>
}

const Layout = ({setTurn}) => {
  //a bunch of layout stuff...
  return (
    //some components including the important one for state:
    <Board board={board} updateBoard={updateBoard}/>
  )
}

const Board = ({ board, setTurn }) => {
  return (
    //some kind of a grid element
    Object.keys(board).map(position => <Card value={board[position].value} faceUp={board[position].faceUp} key={position} position={position} resolveTurn={resolveTurn} updateBoard={updateBoard}/>)
  )
}

const Card = props => {
  const {
    value,
    resolveTurn,
    i,
    updateBoard,
    faceUp
  } = props

  return (
    {
      value &&
      //your flipping card component here with
      faceUp={faceUp}
      onClick={() => {updateBoard({type:'FLIPUP', i:i});resolveTurn(value, i)}}
    }
    {
      !value && //blank space component
    }
  )
}
