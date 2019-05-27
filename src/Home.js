import React, { Component } from 'react';

export class Home extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      	questions: 	["What do you look like? What do I look like? Tell me 3 things for each of us.",
						"Have you ever ...been to Hong Kong? ...seen a bird? ...called a friend on the phone?",
						"How long have you lived in Shenzhen? How long have you been a student? Answer with for and since.",
						"What should you do for a sore throat? What should you do for a cold? Give two pieces of advice for each.",
						"What should you do if you’re homesick? What should you do if you’re stressed? Give two pieces of advice for each.",
						"I’m hungry...where do you want to go? Why do you want to go there? Give me two reasons.",
						"You are a very agreeable person. Agree with all of the following: I like Italian food...I can’t make a pizza... I am hungry... I don’t eat meat.",
						"You are a very disagreeable person. Disagree with all of the following: I don’t like noodles...I’m not a pizza lover...I can make a cake...I can’t make BBQ.",
						"Welcome to Red Robin. What would you like to order? Would you like some salad? What would you like to drink? Water, coke, or tea? Would you like anything else?",
						"Which country is more populous, China or USA? Where is the tallest mountain in the world, Russia, India, or Nepal? Answer with a complete sentence.",
						"How long is the Great Wall of China? How tall are you? How big is China? How far is Beijing from Shenzhen? You don’t need to remember the exact measurements.",
						"What are you doing tonight? Are you going to watch the football match this weekend? What are you doing now? What are you going to do tomorrow?",
						"The school year is almost over. A lot has changed. What have you been up to? What’s new with you? Tell me 3 or more changes.",
						"What are you going to do this summer? What do you hope to do after you graduate? What would you like to do with your life?"],
			roll: 		[]
	    };
	    
	   this.chooseQuestions = this.chooseQuestions.bind(this);
	   this.handleClick = this.handleClick.bind(this);
	}	

	handleClick() {
		this.chooseQuestions();
	}

	//Chooses 3 of the 9 die
	chooseQuestions() {
		let questionArr=[];
		let temp;

		//rolls for 3 random dice, no two the same
		while (questionArr.length<5) {
			temp=Math.floor((Math.random()*14));
			console.log("i rolled a " + temp);
			if (!questionArr.includes(temp)) {
				questionArr.push(temp);
			}
		}

		console.log("finished rolling: "+questionArr);

		this.setState({
			roll: questionArr
		})	
	}

	componentDidMount() {
		this.chooseQuestions();
	}

	render() {
		return (
			<div>

				<button onClick={this.handleClick}>roll</button>

				<div>
					<p>{this.state.questions[this.state.roll[0]]}</p>
					<p>{this.state.questions[this.state.roll[1]]}</p>
					<p>{this.state.questions[this.state.roll[2]]}</p>
					<p>{this.state.questions[this.state.roll[3]]}</p>
					<p>{this.state.questions[this.state.roll[4]]}</p>
				</div>
				
			</div>
		)
	}
}