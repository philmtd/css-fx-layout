import React from "react";
import CodeBlock from '@theme/CodeBlock';
import example1 from "./example1";
import example2 from "./example2";
import example3 from "./example3";
import example4 from "./example4";
import example5 from "./example5";
import example6 from "./example6";
import example7 from "./example7";
import example8 from "./example8";
import example9 from "./example9";
import example10 from "./example10";

const examples = [
	example1,
	example2,
	example3,
	example4,
	example5,
	example6,
	example7,
	example8,
	example9,
	example10
]

export function Examples() {
	let selectorFromLocalStorage = localStorage.getItem("css-fx-layout-preferred-selector") || "attributes";
	const [currentSelector, updateSelector] = React.useState(selectorFromLocalStorage);
	React.useEffect(() => {
		localStorage.setItem("css-fx-layout-preferred-selector", currentSelector);
	}, [currentSelector]);

	return (
		<div className="examples">
			<div className="type-buttons" data-layout="row" data-layout-gap="4px">
				<button className={"button button--" + (currentSelector === "attributes" ? "primary" : "secondary") } onClick={() => updateSelector("attributes")}>Attributes</button>
				<button className={"button button--" + (currentSelector === "classes" ? "primary" : "secondary") } onClick={() => updateSelector("classes")}>Classes</button>
			</div>
			<div>
				{ examples.map(ex => {
					return (
						<div key={ex.title} className="example-container">
							<h2>{ ex.title }</h2>
							<p>{ ex.description }</p>
							<CodeBlock language="html">
								{ currentSelector === "attributes" ? ex.attributes : ex.classes }
							</CodeBlock>
							<div className="example">
								<GetCode code={ currentSelector === "attributes" ? ex.attributes : ex.classes }/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	)
}

function GetCode(opts) {
	return (
		<div dangerouslySetInnerHTML={{__html: opts["code"]}}></div>
	)
}