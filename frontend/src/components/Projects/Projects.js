import React from 'react';
import MainTopBar from '../TopBar/MainTopBar';
import SearchBar from './SearchBar';
import Card from '../Common/Card';
import Button from '../Common/Button';

const projects = [
  {
    title: 'LoopOver',
    description: 'Simple logic game inspired by Youtuber Carykh',
    icon: 'https://lh3.googleusercontent.com/IPtjn7jcSBWcg-z_LhZy7fGV8hPbWzqLDxLH0I2239kXVNOjqsDeTsiwAt2FE6cI8G6T',
    tags: [
      {
        color: '#1D3F47',
        text: '#kotlin'
      },
      {
        color: '#1D472E',
        text: '#android'
      }
    ]
  },
  {
    title: 'Mobile USOS',
    description: 'App developed based on the USOS system to help navigate through the timetable',
    icon: 'https://lh3.googleusercontent.com/xZ0uvmXCeyqgJXSGwS7B-ZJWDBDTCxtdTidcpfEjTnJQO3xE0-LsNbR2-3QttXep29Q',
    tags: [
      {
        color: '#1D3F47',
        text: '#kotlin'
      },
      {
        color: '#1D472E',
        text: '#android'
      },
      {
        color: '#47401D',
        text: '#firebase'
      }
    ]
  },
  {
    title: 'Reminder',
    description: 'Just an app to remind you to not forget',
    icon: 'https://lh3.googleusercontent.com/LLeGsR6hVt4EVreAiy_KBnLbRBQVLNeI9kk0YnHyECpdVkvGiMNKIVlNv18enoy2Hfw',
    tags: [
      {
        color: '#1D3F47',
        text: '#kotlin'
      },
      {
        color: '#1D472E',
        text: '#android'
      },
      {
        color: '#47401D',
        text: '#firebase'
      }
    ]
  },
  {
    title: 'RAM interpreter',
    description: 'Interpreter and compiler of the RAM language',
    icon: 'https://lh3.googleusercontent.com/KuJ-BaHKdNw5zja4IAmyKUrhrlyuYKnsAe24k1NxQ4Cu3sIwSTFbjIdbuWQ3IcMm7A',
    tags: [
      {
        color: '#1D3F47',
        text: '#kotlin'
      },
      {
        color: '#1D472E',
        text: '#android'
      }
    ]
  }
]

export default function Projects() {
  return (
    <div>
      <MainTopBar />
      <div style={{ display: 'flex' }}>
        <h1 style={{
          marginTop: '8rem',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>Explore all my projects</h1>
      </div>
      <SearchBar />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3rem', flexWrap: 'wrap' }}>
        {projects.map(p => {
          return (
            <Card style={{ width: '350px', height: '300px', margin: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '15px', height: '100%' }}>
                <img src={p.icon} alt="Icon" style={{ width: '75px', height: '75px' }} />
                <h2 style={{ paddingTop: '15px', margin: 0 }}>{p.title}</h2>
                <p style={{ color: '#9C9C9C', fontSize: '0.8rem' }}>{p.description}</p>
                <div style={{flexDirection: 'row', marginTop: 'auto', marginBottom: '1.5rem'}}>
                  {p.tags.map(t => {
                    return (
                      <Button style={{fontSize: '0.8rem', padding: '0.3rem 1rem 0.3rem 1rem', marginRight: '0.5rem', backgroundColor: `${t.color}`}}>
                        {t.text}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}