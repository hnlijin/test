//
//  main.cpp
//  gltest
//
//  Created by jin.li on 17/2/20.
//  Copyright © 2017年 jin.li. All rights reserved.
//

#include <iostream>
#include <GLUT/GLUT.h>
#include <math.h>

#include "utils.h"
#include "lines.h"
#include "clock.h"
#include "stars.h"
#include "rects.h"
#include "circles.h"
#include "universe.h"
#include "opencv_test.h"

GLfloat spin = 0.0;

void display()
{
}

void reshape(int w, int h)
{
    if (h == 0)
    {
        h = 1;
    }
    
    glViewport(0, 0, (GLsizei)w, (GLsizei)h);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluPerspective(45.0, (GLfloat)w / (GLfloat)h, 1.0, 20.0);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    glTranslatef(0.0, 0.0, -5.0);
}

void spinDisplay()
{
    spin = spin + 1.0f;
    if (spin > 360.0)
    {
        spin = spin - 360.0;
    }
    glutPostRedisplay();
}

int main(int argc, char * argv[])
{
    opencv_test2(argv);
    return 0;
    
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowSize(200, 200);
    glutInitWindowPosition(1100, 700);
    glutCreateWindow(argv[1]);
    
//    circleInit();
//    glutDisplayFunc(&circleDisplay);
    
//    glutDisplayFunc(&clockDisplay);
    
//    glutDisplayFunc(&rectDisplay);
    glutDisplayFunc(&universeDisplay);
    
    glutReshapeFunc(&reshape);
    glutIdleFunc(&spinDisplay);
    glutMainLoop();
    
    return 0;
}
