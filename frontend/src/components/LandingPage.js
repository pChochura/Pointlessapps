import React from 'react';
import Card from './Card';
import Terminal from './Terminal';
import Button from './Button';

export default function LandingPage() {
	return (
		<main>
			<div className="text-home">
				<h1>PointlessApps</h1>
				<p>
					A simple project to contain all others.<br />
					<span className="active">Less</span> is just by name. There's a lot.
				</p>
				<Button>
					Let's see
				</Button>
			</div>
			<Card>
				<Terminal data_output="../data/terminal_output" />
			</Card>
		</main>
	);
}