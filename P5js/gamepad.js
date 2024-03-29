const GP = {
  connected: false,
  id: "",
  timestamp: "",
  mapping: "standard",
  index: 0,
  // 0
  A: 0,
  // 1
  B: 0,
  // 2
  X: 0,
  // 3
  Y: 0,
  // 4
  LB: 0,
  // 5
  RB: 0,
  // 6
  LT: 0.0,
  // 7
  RT: 0.0,
  // 8
  Back: 0,
  // 9
  Start: 0,
  // 10 left stick down
  LS_Down: 0,
  // 11
  RS_Down: 0,
  // 12
  DP_UP: 0,
  // 13
  DP_DOWN: 0,
  // 14
  DP_LEFT: 0,
  // 15
  DP_RIGHT: 0,
  // axes[0],axes[1]
  LS: [0.0, 0.0],
  // axes[1],axes[2]
  RS: [0.0, 0.0],
  // 17
  Share: 0,
};

function updateGamePad() {
  let gp = navigator.getGamepads()[0];
  if(!gp) return;
  GP.id = gp.id;
  GP.index = gp.index;
  GP.mapping = gp.mapping;
  GP.timestamp = gp.timestamp;
  GP.A = gp.buttons[0].value;
  GP.B = gp.buttons[1].value;
  GP.X = gp.buttons[2].value;
  GP.Y = gp.buttons[3].value;
  GP.LB = gp.buttons[4].value;
  GP.RB = gp.buttons[5].value;
  GP.LT = gp.buttons[6].value;
  GP.RT = gp.buttons[7].value;
  GP.Back = gp.buttons[8].value;
  GP.Start = gp.buttons[9].value;
  GP.LS_Down = gp.buttons[10].value;
  GP.RS_Down = gp.buttons[11].value;
  GP.DP_UP = gp.buttons[12].value;
  GP.DP_DOWN = gp.buttons[13].value;
  GP.DP_LEFT = gp.buttons[14].value;
  GP.DP_RIGHT = gp.buttons[15].value;
  GP.LS = [gp.axes[0], gp.axes[1]];
  GP.RS = [gp.axes[2], gp.axes[3]];
  GP.Share = gp.buttons[17].value;
}
