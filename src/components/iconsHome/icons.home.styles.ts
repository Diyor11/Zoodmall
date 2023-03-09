import styled from 'styled-components'

export const ElWrapper = styled.div`
    margin-block: 1rem;

    .icons-home_item{

        &_label{
            margin-top: 6px;
            font-size: 0.9rem;
            display: block;
            color: #4d4d4d;
            text-align: center;
        }

        &_image{
            width: 75px;
            height: 75px;
            max-width: 100px;
            object-fit: contain;
            margin: 0 auto .5rem;
        }

        @media(max-width: 768px) {

            .label{
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 0.7rem;
            }

            img{
                max-width: 30px;
                height: 40px;
            }
        }
    }

    .deal-card{
        color: #4d4d4d;
        display: block;
        border: 1px solid #eaeefc;
        border-radius: 10px;
        padding: 1px;
        width: fit-content;
        margin-inline: auto;

        &_label{
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            display: block;
            max-width: 120px;
            /* margin-in?line: auto; */
            word-break: break-all;
            text-align: center;
        }

        &_image{
            object-fit: cover;
            display: block;
            width: 120px;
            height: 120px;
        }
    }
`