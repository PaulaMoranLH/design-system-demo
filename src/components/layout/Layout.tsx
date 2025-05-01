'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { SecondaryButton } from '../ui/SecondaryButton';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showCaseDetailsTooltip, setShowCaseDetailsTooltip] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  return (
    <>
      <style>
        {`
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #2D1910 transparent;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #2D1910;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background-color: transparent;
          }
        `}
      </style>
      <div style={{ 
        display: 'flex', 
        height: '100vh', 
        width: '100%',
        overflow: 'hidden'
      }}>
        {/* Sidebar */}
        <div style={{
          width: '204px',
          backgroundColor: '#2D1910',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          flexShrink: 0,
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ marginBottom: '24px' }}>
            <Image 
              src="/my-logo.svg"
              alt="Logo"
              width={204}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <Button 
              icon={
                <Image 
                  src="/icons/cases.svg" 
                  alt="My Cases" 
                  width={16} 
                  height={16}
                  style={{ width: '16px', height: '16px' }}
                />
              }
              style={{ 
                backgroundColor: '#4D3C33',
                borderRadius: '8px',
                color: '#FFFBF9',
                fontFamily: '"Founders Grotesk"',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                fontFeatureSettings: '"liga" off, "clig" off',
                justifyContent: 'flex-start',
                width: '100%',
                boxShadow: 'none',
                outline: 'none',
                border: 'none',
                padding: '8px',
                margin: '-8px'
              }}
            >
              My cases
            </Button>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              color: '#BBABA3',
              fontFamily: 'Founders Grotesk, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '0',
              fontFeatureSettings: '"liga" off, "clig" off',
              cursor: 'pointer',
              padding: '8px',
              margin: '-8px'
            }}>
              <Image 
                src="/icons/research.svg" 
                alt="Research" 
                width={16} 
                height={16}
                style={{ width: '16px', height: '16px' }}
              />
              Research
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              color: '#BBABA3',
              fontFamily: 'Founders Grotesk, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '0',
              fontFeatureSettings: '"liga" off, "clig" off',
              cursor: 'pointer',
              padding: '8px',
              margin: '-8px'
            }}>
              <Image 
                src="/icons/analyze.svg" 
                alt="Analyze" 
                width={16} 
                height={16}
                style={{ width: '16px', height: '16px' }}
              />
              Analyze
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              color: '#BBABA3',
              fontFamily: 'Founders Grotesk, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '0',
              fontFeatureSettings: '"liga" off, "clig" off',
              cursor: 'pointer',
              padding: '8px',
              margin: '-8px'
            }}>
              <Image 
                src="/icons/work.svg" 
                alt="My Work" 
                width={16} 
                height={16}
                style={{ width: '16px', height: '16px' }}
              />
              My Work
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          minWidth: 0,
          position: 'relative',
          backgroundColor: '#2D1910'
        }}>
          {/* Top bar */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50px',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '8px'
          }}>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                backgroundColor: '#594D46',
                overflow: 'hidden'
              }}>
                <Image
                  src="/avatar.png"
                  alt="User avatar"
                  width={32}
                  height={32}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <Image
                src="/icons/arrow.svg"
                alt="Arrow icon"
                width={11}
                height={7}
                style={{ 
                  width: '11px',
                  height: '7px',
                  padding: '8px 4px'
                }}
              />
            </div>
          </div>

          {/* White content area */}
          <div style={{ 
            position: 'absolute',
            top: '48px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#FEFEFE',
            borderTopLeftRadius: '8px',
            overflowY: 'auto',
            overflowX: 'hidden',
            fontFamily: '"Founders Grotesk"'
          }}>
            <div style={{ padding: '20px' }}>
              <div style={{ 
                marginBottom: '20px',
                position: 'relative'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '20px',
                  paddingBottom: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ cursor: 'pointer' }}
                    >
                      <path 
                        d="M10 4L6 8L10 12" 
                        stroke="#948883" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div style={{ 
                      color: '#594D46',
                      fontFamily: '"Founders Grotesk"',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: 'normal',
                      fontFeatureSettings: '"liga" off, "clig" off'
                    }}>
                      12345-United States v. Boima
                    </div>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{ display: 'flex', gap: '20px', marginRight: '20px' }}>
                      <div style={{ position: 'relative' }}>
                        <Image 
                          src="/file.svg" 
                          alt="Case Details" 
                          width={24} 
                          height={24}
                          style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                          onMouseEnter={() => setShowCaseDetailsTooltip(true)}
                          onMouseLeave={() => setShowCaseDetailsTooltip(false)}
                        />
                        {showCaseDetailsTooltip && (
                          <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            marginTop: '8px',
                            backgroundColor: '#252323',
                            color: '#FFFBF9',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            fontSize: '14px',
                            whiteSpace: 'nowrap',
                            zIndex: 1000
                          }}>
                            <div style={{
                              position: 'absolute',
                              top: '-6px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 0,
                              height: 0,
                              borderLeft: '6px solid transparent',
                              borderRight: '6px solid transparent',
                              borderBottom: '6px solid #252323'
                            }} />
                            Case details
                          </div>
                        )}
                      </div>
                      <div style={{ position: 'relative' }}>
                        <Image 
                          src="/file.svg" 
                          alt="Share" 
                          width={24} 
                          height={24}
                          style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                          onMouseEnter={() => setShowShareTooltip(true)}
                          onMouseLeave={() => setShowShareTooltip(false)}
                        />
                        {showShareTooltip && (
                          <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            marginTop: '8px',
                            backgroundColor: '#252323',
                            color: '#FFFBF9',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            fontSize: '14px',
                            whiteSpace: 'nowrap',
                            zIndex: 1000
                          }}>
                            <div style={{
                              position: 'absolute',
                              top: '-6px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 0,
                              height: 0,
                              borderLeft: '6px solid transparent',
                              borderRight: '6px solid transparent',
                              borderBottom: '6px solid #252323'
                            }} />
                            Share
                          </div>
                        )}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                      <SecondaryButton style={{ 
                        border: '1px solid #D4D4D4',
                        color: '#72625B',
                        fontFamily: '"Founders Grotesk"',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        fontFeatureSettings: '"liga" off, "clig" off'
                      }}>
                        Summarize
                      </SecondaryButton>
                      <SecondaryButton style={{ 
                        border: '1px solid #D4D4D4',
                        color: '#72625B',
                        fontFamily: '"Founders Grotesk"',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        fontFeatureSettings: '"liga" off, "clig" off'
                      }}>
                        Analyze
                      </SecondaryButton>
                      <Button style={{ 
                        backgroundColor: '#62534B',
                        borderRadius: '5px',
                        color: '#FFFBF9',
                        fontFamily: '"Founders Grotesk"',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        fontFeatureSettings: '"liga" off, "clig" off',
                        width: '133px',
                        height: '32px',
                        flexShrink: 0,
                        boxShadow: 'none',
                        outline: 'none',
                        border: 'none'
                      }}>
                        Query record
                      </Button>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: -20,
                  right: -20,
                  height: '1px',
                  backgroundColor: '#D4D4D4'
                }} />
              </div>

              {/* Summary section */}
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  marginBottom: '12px',
                  color: '#594D46',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  fontFeatureSettings: '"liga" off, "clig" off'
                }}>
                  <Image 
                    src="/file.svg" 
                    alt="Summary" 
                    width={16} 
                    height={16}
                    style={{ width: '16px', height: '16px' }}
                  />
                  Summary
                </div>
                <textarea
                  className="custom-scrollbar"
                  style={{
                    width: '100%',
                    minHeight: '200px',
                    padding: '16px 20px',
                    border: '1px solid #D4D4D4',
                    borderRadius: '8px',
                    color: '#72615A',
                    textAlign: 'justify',
                    fontFamily: '"Founders Grotesk"',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '130%',
                    fontFeatureSettings: '"liga" off, "clig" off',
                    resize: 'vertical',
                    backgroundColor: '#FEFEFE',
                    boxSizing: 'border-box'
                  }}
                  defaultValue="The case of United States v. Samuel Boima involves an appeal by Samuel Boima challenging a district court order authorizing involuntary administration of antipsychotic medication to restore his competency to stand trial. The case, which centers around the application of the procedural and constitutional framework established in Sell v. United States, arose after Boima was charged with assaulting federal officers by spitting on them. The district court had ruled in favor of the government's request for forced medication, asserting that the Sell factors—specifically the seriousness of the crime, the necessity and medical appropriateness of the medication, and its likelihood to restore competency—justified the order. Boima argues that the crime is not serious, the government's interest is diminished due to his deportation order and lack of evidence for civil commitment, and the court improperly treated Sell as a balancing test. The government counters that prosecution is in the public interest for maintaining safety and that expert testimony supports the effectiveness of medication. This case is significant as it raises critical questions about individual liberty, the proportionality of governmental interest in prosecution, and the ethical dimensions of forcibly medicating individuals. Its distinguishing factor lies in the minor nature of the charges, which challenges the usual justification for such intrusive measures."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout; 