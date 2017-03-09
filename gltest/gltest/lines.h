//
//  testLines.h
//  gltest
//
//  Created by jin.li on 17/2/23.
//  Copyright © 2017年 jin.li. All rights reserved.
//

#ifndef testLines_h
#define testLines_h

#include <stdio.h>
#include <GLUT/GLUT.h>

void lineDisplay()
{
    glClear(GL_COLOR_BUFFER_BIT);
    
    glColor3f(1.0f, 0.0f, 0.0f);    // 设置颜色
    glLineWidth(1.0);               // 设置线的粗细
    
    glBegin(GL_LINES);              // 设置为划线模式
        glVertex2f(0.0, 0.0);
        glVertex2f(1.5, 0.0);
    glEnd();
    
    glFlush();
    glutSwapBuffers();
}

void lineDisplay2()
{
    glClear(GL_COLOR_BUFFER_BIT);
    
    glEnable(GL_LINE_STIPPLE);      // 开启虚线模式
    glLineStipple(2, 0x0F0F);       // 虚线样式
    
    glBegin(GL_LINES);              // 设置为划线模式
        glVertex2f(0.0, 0.0);
        glVertex2f(1.5, 0.0);
    glEnd();
    
    glDisable(GL_LINE_STIPPLE);
    
    glFlush();
    glutSwapBuffers();
}

#endif /* testLines_h */
