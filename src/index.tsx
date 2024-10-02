import { hydrate, prerender as ssr } from 'preact-iso';
import { Divider, ThematicBreak } from '@bonniernews/dn-design-system-web/preact';

import dnLogo from './assets/dn-small.svg';
import './style.css';

export function App() {
	return (
		<div>
			<div style="background-color: white; padding: 50px; border-radius: 50%; width: 200px; height: 200px; display: inline-flex; justify-content: center; align-items: center;">
				<img src={dnLogo} alt="DN logo" width="150" />
        <span style="color:black; font-family: sans-serif; font-weight: bold; font-size: 30px;">Camy</span>
			</div>
			<h1>Nya Bang</h1>
      <p>Här kommer divider-komponenter</p>
      <Divider variant="medium" classNames="delare" attributes={{}} />
      <ThematicBreak classNames="tematisk-delare" />

			<section>
				<Resource
					title="Bang"
					description="Den gamla kodbasen"
					href="https://github.com/BonnierNews/dn-web/web/bang"
				/>
				<Resource
					title="Varför Preact?"
					description="Vi behöver inte React. Preact är lite mindre. Läs skillnaderna här."
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="Varför döpte vi den till Camy?"
					description="Camilla har jobbat på DN sedan första versionen av sajten (DNet). Läs artikeln '25 år på nätet med DN'"
					href="https://www.dn.se/kultur/dn-firar-25-ar-pa-natet-blickar-framat/"
				/>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
