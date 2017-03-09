//
//  clock.h
//  gltest
//
//  Created by jin.li on 17/2/23.
//  Copyright © 2017年 jin.li. All rights reserved.
//

#ifndef clock_h
#define clock_h

#include <GLUT/GLUT.h>
#include "utils.h"
#include <time.h>
#include <iostream>

GLint TIME = 60;

GLint frame = 0;
GLint sec = 0;
GLint min = 0;
GLint hour = 0;

void clockDisplay()
{
    glClear(GL_COLOR_BUFFER_BIT);
    
//    glEnable(GL_BLEND);
//    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
//    
//    glEnable(GL_POINT_SMOOTH);
//    glHint(GL_POINT_SMOOTH_HINT, GL_NICEST);
//    
//    glEnable(GL_LINE_SMOOTH);
//    glHint(GL_LINE_SMOOTH_HINT, GL_NICEST);
    
    drawCircle(0.0, 0.0, 1.6, 60);
    
    glBegin(GL_LINES);
    for (int i = 0; i < 12; i++)
    {
        GLfloat x1 = 1.5 * cos(2 * M_PI / 12 * i);
        GLfloat y1 = 1.5 * sin(2 * M_PI / 12 * i);
        
        GLfloat x2 = 1.6 * cos(2 * M_PI / 12 * i);
        GLfloat y2 = 1.6 * sin(2 * M_PI / 12 * i);
        
        glVertex2f(x1, y1);
        glVertex2f(x2, y2);
    }
    glEnd();
    
    frame += 1;
    
    if (frame % 10 == 0)
    {
        time_t t = time(nullptr);
        tm* t2 = localtime(&t);
        hour = t2->tm_hour % 12;
        sec = t2->tm_sec;
        min = t2->tm_min;
    }
    
    // glColor3f(1.0f, 0.0f, 0.0f);
    glLineWidth(1.0);
    
    // 时针
    glBegin(GL_LINES);     glVertex2f(0.0, 0.0);
    glVertex2f(1.4 * sin(2*M_PI*hour/12), 1.4 * cos(2*M_PI*hour/12));
    glEnd();
    
    // 分针
    glBegin(GL_LINES);
    glVertex2f(0.0, 0.0);
    glVertex2f(1.4 * sin(2*M_PI*min/TIME), 1.4 * cos(2*M_PI*min/TIME));
    glEnd();
    
    // 秒针
    glBegin(GL_LINES);
    glVertex2f(0.0, 0.0);
    glVertex2f(1.4 * sin(2*M_PI*sec/TIME), 1.4 * cos(2*M_PI*sec/TIME));
    glEnd();
    
    glDisable(GL_LINE_SMOOTH);
    
    glFlush();
    glutSwapBuffers();
}

#endif /* clock_h */
