## How to deal with the interpolation of the pokemon id in the URL path?

How Colt does it: 

- Declare a variable `POKE_API` and set it to the base URL WITHOUT the `${id}.png` part.
- Declare a variable `imageSrc` that combines our `POKE_API` variable with `${this.props.id}.png` to individualize the identifier.
- Include `imgSrc` as the `src` for `img`.
- Set `alt` to `this.props.name` to ensure it's accessible. 

```Javascript
class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${this.props.id}.png`
    return (
        <img src={imgSrc} alt={this.props.name}/>
        )
    }
```

## How to write a function that pads the ID of the pokemon with two zeros?

Simple function. 
Takes a number in. 
Checks -> is the number less than or equal to 999 (the greatest three digit number)? 
`let pad = (number) => (number <= 999 ? ...)`
    -> if NO (meaning it's **greater** than 999), then we do nothing and return the `number`
    
    
```Javascript
    let pad = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)
```

