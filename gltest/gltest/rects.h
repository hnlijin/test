//
//  rects.h
//  gltest
//
//  Created by jin.li on 17/2/23.
//  Copyright © 2017年 jin.li. All rights reserved.
//

#ifndef rects_h
#define rects_h

#include <GLUT/GLUT.h>

void rectDisplay()
{
    glClear(GL_COLOR_BUFFER_BIT);
    
    glPolygonMode(GL_FRONT, GL_FILL);   // 设置正面为填充模式
    glPolygonMode(GL_BACK, GL_LINE);    // 设置反面为线形模式
    glFrontFace(GL_CCW);                // 设置逆时针方向为正面
    
    glBegin(GL_POLYGON);                // 按逆时针绘制一个正方形，在左下方
        glVertex2f(-0.5f, -0.5f);
        glVertex2f(0.0f, -0.5f);
        glVertex2f(0.0f, 0.0f);
        glVertex2f(-0.5f, 0.0f);
    glEnd();
    
    glBegin(GL_POLYGON);                // 按顺时针绘制一个正方形，在右上方
        glVertex2f(0.0f, 0.0f);
        glVertex2f(0.0f, 0.5f);
        glVertex2f(0.5f, 0.5f);
        glVertex2f(0.5f, 0.0f);
    glEnd();
    
    glFlush();
    glutSwapBuffers();
}

#endif /* rects_h */
