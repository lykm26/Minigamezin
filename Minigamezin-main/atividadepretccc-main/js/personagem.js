class personagem{
	x;
	y;
	color;
	shape
	ctx;
	
	contructor(ctx){
		this.ctx = ctx;
		this.spaw();
	}
	
	spaw(){
		this.personagem= PERSONAGENS;
		this.color = COLORES;
		this.x = 0;
		this.y = 0;
	}
	