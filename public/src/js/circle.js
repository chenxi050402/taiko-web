class Circle{
	constructor(config){
		// id, ms, type, text, speed, endTime, requiredHits
		this.id = config.id
		this.ms = config.start
		this.type = config.type
		this.text = config.txt
		this.speed = config.speed
		this.endTime = config.endTime || this.ms + 150
		this.isPlayed = 0
		this.animating = false
		this.animT = 0
		this.score = 0
		this.lastFrame = this.ms + 100
		this.animationEnded = false
		this.status = -1
		this.timesHit = 0
		this.requiredHits = config.requiredHits || 0
		this.rendaPlayed = false
		this.gogoTime = config.gogoTime
		this.gogoChecked = false
	}
	getMS(){
		return this.ms
	}
	getEndTime(){
		return this.endTime
	}
	getType(){
		return this.type
	}
	getLastFrame(){
		return this.lastFrame
	}
	incFrame(){
		this.lastFrame += 20
	}
	animate(){
		this.animating = true
	}
	isAnimated(){
		return this.animating
	}
	getAnimT(){
		return this.animT
	}
	incAnimT(){
		this.animT += 0.05
	}
	updateStatus(status){
		this.status = status
	}
	getStatus(){
		return this.status
	}
	getPlayed(){
		return this.isPlayed
	}
	isAnimationFinished(){
		return this.animationEnded
	}
	endAnimation(){
		this.animationEnded = true
	}
	played(score, big){
		this.score = score
		this.isPlayed = big ? 2 : 1
	}
	hit(){
		this.timesHit++
	}
	getScore(){
		return this.score
	}
	getID(){
		return this.id
	}
	getText(){
		return this.text
	}
	getSpeed(){
		return this.speed
	}
}