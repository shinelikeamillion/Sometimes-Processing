you can check out all the reference here : https://p5js.org/reference/
### 记录一些常用 特性（API）
1. Color
    - lerpColor(fromColor, toColor, 0.*): 从 0 ～ 1 取渐两个颜色渐变的对应颜色
    - colorMode(RGB / HSB / HSL): 红绿蓝/色调饱和度/亮度（光度）
    - lightness(): 提取颜色的光度值
    - saturation(): 提取饱和度值
    - hue()

2. Shape
    - arc(): 圆弧
    - ellipse()
    - line()
    - point()
    - rect()
    - quad(): 四角形
    - triangle()
    - strokeJoin(MITER / BEVEL / ROUND): 连线风格
    - begin/endShape() + vertex()： 更复杂的图形

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
    - abs()
    - ceil() ?
    - constrain(): 限制取值区间
    - dist(): 距离
    - noise(): 噪音函数
    - acos() / asin() / atan() ? 
    - cos() / sin() / tan(): 三角函数
    - atan2(): 屏蔽掉负数情况的正切函数
    - degrees():将弧度转换成角度值
    - radians(): 将角度值转换成对应的弧度值
    - angleMode(): 角度模式
    - exp(): 返回欧拉数
    - log(): 自然对数
    - mag(): 计算向量大小
    - map(): 从一个范围映射一个数字到另一个范围
    - norm(): 将一个数字标准化成一个介于 0 到 1 间的值

11. Typography

12. Lights, Camera

13. p5.Shader