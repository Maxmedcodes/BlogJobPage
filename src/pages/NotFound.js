import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not Found!!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos
        cumque dolores quidem cum doloribus tenetur ipsam adipisci nostrum nam
        error architecto molestiae iure amet laboriosam quod qui nihil autem
        blanditiis excepturi rem beatae nesciunt. Vel asperiores eos eveniet
        deserunt debitis placeat perspiciatis porro error. Optio ab eos,
        suscipit maxime iure, ullam quam in autem assumenda nesciunt ducimus ex
        atque. Laudantium neque placeat corporis laboriosam voluptatibus dolorem
        unde, quam porro libero esse necessitatibus temporibus non provident
        earum consectetur. Repudiandae possimus quaerat praesentium voluptatibus
        explicabo dignissimos necessitatibus, culpa quasi hic laboriosam dolor
        esse adipisci consectetur, aperiam enim earum voluptates quae nostrum?
      </p>
      <p>
        Go to the Correct Page Dummy - <Link to="/">HomePage</Link>.
      </p>
    </div>
  );
}
