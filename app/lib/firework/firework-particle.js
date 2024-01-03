class FireworkParticle {
  constructor (initialX, initialY) {
    this.initialX = initialX
    this.initialY = initialY

    this.reset()
  }

  update () {
    this.x = this.x + this.dx
    this.y = this.y + this.dy

    this.dy = this.dy + 0.05 + Math.random() * 0.01

    if (this.dy > 0) this.die = true
  }

  render (drawingContext) {
    drawingContext.fillStyle = '#b00'
    drawingContext.fillRect(this.x - 2, this.y, 4, 7)
  }

  reset () {
    this.die = false
    this.x = this.initialX
    this.y = this.initialY

    this.dy = -8.0 - Math.random()
    this.dx = Math.random() * 2 - 1
  }
}

export default FireworkParticle
