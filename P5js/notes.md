you can check out all the reference here : https://p5js.org/reference/
### 记录一些常用 特性（API）
1. Color
    - lerpColor(fromColor, toColor, 0.*): 从 0 ～ 1 取渐两个颜色渐变的对应颜色
    - colorMode(RGB / HSB / HSL): 红绿蓝/色调饱和度/亮度（光度）
    - lightness(): 提取颜色的光度值
    - saturation(): 提取饱和度值
    - hue(): 提取色调值

    - erase()/noErase(): 从画布上减去正绘制的图形

2. Shape
    - arc(): 圆弧
    - ellipse()
    - line()
    - point()
    - rect()
    - stroke() 第二个参数为透明度 0～255！！
    - quad(): 四角形
    - triangle()
    - strokeJoin(MITER 尖/ BEVEL 斜/ ROUND 圆): 连线风格
    - begin/endShape() + vertex()： 更复杂的图形
    - strokeCap(): 线条顶点风格 ROUND圆/SQUARE直/PROJECT

2. 3D 形状
    - plane() 平面
    - sphere() 用给予的半径画一个球形
    - torus() 一个圆环
    - cone() 圆锥
    - cylinder() 圆柱


3. Constants
    - HALF_PI / PI / QUARTER_PI/ TWO_PI

4. Environment
    - print()
    - frameCount
    - frameRate()
    - cursor()
    - windowWidth / windowHeiht / windowResized()
    - width / height

5. Transform
    - rotate() / rotateX() / rotateZ()
    - scale()
    - translate()

6. Data

7. Event
    - keyIsPressed
    - key
    - keyCode
    - keyPressed() / keyReleased() / keyTyped() / keyIsDown()
    - mouseX / mouseY / pmouseX / pmouseY / winMouseX / winMouseY
    - mouseIsPressed
    - mouseMoved()/Dragged()/Pressed()/Clicked()/Wheel()

8. Image
    - createImage()
    - saveCanvas()
    - saveFrames()
    - loadImage()
    - image()
    - pixels()
    - blend()
    - copy()
    - filter()
    - get()
    - loadPixels()
    - updatePixels()

9. IO

10. Math
    - createVector() // 创建一个向量
    - abs()  取绝对值
    - ceil()  浮点数向上取整
    - pow() 几次方
    - constrain(): 限制取值区间
    - dist(): 距离
    - noise(): 噪音函数
    - acos() / asin() / atan() 求该值的翻 正/余/真切值
    - cos() / sin() / tan(): 三角函数
    - atan2(): 屏蔽掉负数情况的正切函数
    - degrees():将弧度转换成角度值 PI -> 180‘
    - radians(): 将角度值转换成对应的弧度值 360‘ -> TWO_PI
    - angleMode(): 角度模式
    - exp(): 返回欧拉数
    - log(): 自然对数
    - mag(): 计算向量大小
    - sq(): 平方一个数字
    - map(): 从一个范围映射一个数字到另一个范围, 第四个参数为可否越界
    - norm(): 将一个数字标准化成一个介于 0 到 1 间的值, 范围外的值有用处

    - randomSeed(): 使用随机种子，是每次执行生成相同伪随机结果 seam as noiseSeed()
    - randomGaussian(): 返回一个符合高斯，或正态，分布的随机数

11. Typography

12. Lights, Camera

13. p5.Shader


### 记录一些 javascript 注意事项
1. 10 == ”10“; 1 == ""; 都返回 true, 常规比较中类型会被忽略
2. 所有浮点数都是以 64 位存储，精度很难确定；可以使用整除法解决
    （x * 10 + y * 10） / 10
3. 使用 \ 连接换行字符
4. 你用 2D perlin noise 中选取圆圈可以实现 loop 效果