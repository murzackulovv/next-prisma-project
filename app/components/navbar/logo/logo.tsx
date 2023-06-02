'use client'
import styles from './index.module.scss'
import Image from "next/image";

const Logo: React.FC = (): JSX.Element =>  <Image className='styles.logoImg'
                          src='/images/logo.png' 
                          alt=''
                          width={100}
                          height={100}
                          />

export default Logo