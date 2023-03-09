import styled from 'styled-components'

export const ElWrapper = styled.section`
    margin-block: 1rem;

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        &-see_all{
            display: flex;
            align-items: center;
            color: #2d3092;
            transition: 0.25s;
            font-weight: 600;
            font-size: 14px;

            p{
                padding-right: 5px;
            }

            &:hover{
                border-bottom: 1px solid #2d3092;
                transform: translateY(-12%);
            }
        }
    }

    .products{
        background-color: #fff;
        padding: 18px 16px;
        border-radius: 12px;
    }
`