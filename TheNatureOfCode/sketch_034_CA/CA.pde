class CA {
  int[] cells;
  int[] ruleset;
  int size;
  
  CA() {
    size = 10;
    cells = new int[width/size];
    ruleset = new int[]{0, 1, 0, 1, 1, 0, 1, 0};
    
    for(int i = 0; i < cells.length; i++) {
      cells[i] = 0;
    }
    cells[cells.length/2] = 1;
  }
  
  void generate() {
    int[] nextgen = new int[cells.length];
    for(int i = 1; i < cells.length-1; i++) {
      int left = cells[i-1];
      int me = cells[i];
      int right = cells[i+1];
      nextgen[i] = rule(left, me, right);
    }
    
    cells = nextgen;
  }
  
  int rule(int a, int b, int c) {
    String s = "" + a + b + c;
    int index = Integer.parseInt(s, 2);
    return ruleset[index];
  }
  
  void show() {
    for(int i = 1; i < cells.length-1; i++) {
      
      if(cells[i] == 1){
        fill(0);
        stroke(0);
        rect( i*size, 0, size, size);
      }
    }
  }
}
