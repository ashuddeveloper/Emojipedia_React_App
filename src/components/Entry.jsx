import React from "react";
import Cards from "./Cards";
import emojipedia from "../emojipedia";

function CreateCard(e) {
  return <Cards key={e.id} emoji={e.emoji} name={e.name} meaning={e.meaning} />;
}

function Entry() {
  return <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>;
}

export default Entry;
