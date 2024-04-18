import AvatarImage from '../common/AvatarImage';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const avatarImgUrl =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUZGRgYGBgZGBgaGhoYGBgaGBoZGRgaGBgcIS4lHB4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISGjQkISE0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0MTQ0NDE0NDQ0NDQ0NDQ0NDE0NDE0Pz80PzQ0NDQxMf/AABEIAOkA2AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xAA8EAACAQIDBQYEBAUCBwAAAAABAgADEQQSIQUxQVGBBiJhcZGxE6HB8AcyQtFSYnKC4SOyFBUkM2OS8f/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAQEAAwEBAAAAAAAAAAECETEhAxJBUSL/2gAMAwEAAhEDEQA/APVDBFBLZFeCIwQBQRQRgrxRQExgZj9ptqjD0He4DWsuoBudLjy3yj2t7ULhFA0LsNByHMzyDbvaCpiKjPlXvWBC+AtJtOTrP2li2diScx4nW+vGQ4dhv3RlNL6n9iv7iFCoMla+2KI7wNjYg24g7x9+Mz8LiCY6qhNlHTjGVFyOwPMjluNjC0NBqnd1lB31+7SV6lxylTKSdL+Z0ECjU2NjmpVUqK5BRgefHUWvxFxPVT2nes+SiveNgTvC38P1E77aWAO7ePHKJsd87bspt1KTd8hdwz5Sxtx4+UcFem4DBW1d7tx3H1P0GnnvmsqATPwxRwCKhYeGUA+g19ZaWmw3OT/VY/MWlxCeOvIlfgRb5j1kgjAxAwXggD4oIogIMMUUAkgMMEkBBCYDGAiiijBSDFYgIjOxsFFyZNOc7c4lUwdTML5rKo/mJuN3K1+kA8e7TbRbEVnqFd5sMt7WG7frumC7MN2nrf2l6s5AsSSTKVuUzq4YlRxrv+ctU8Rm0Ki/lDSS++xl2ngyeUXVcP2PRvUUWvqOnrwlvtPs4pVbKgsDbf1Nus0+zmzjnVjoAd54+vSaHaekM5spuACSOI4kSbVTLgQSN4A++cjrsOLachNXE0xfd+/+Zm16Q4Wv6e8cqblWV18Zdw9ewsPnzlI0/Axyyi49G/D8/EZ6Rquh/MmXKR/NcMDfoRPQKOGr097q4/pyH5aTxnsvj/gV0qX/ACsL2/hOhB6T3mm9wCOMrKNeo6GIvoRY8pOJG9O/08PKOQ6S0pIoIYGUUUUAcIoooiSwQxsRkYIjEYwUBiggBnnX4lbUU5aAFyhDvwsSO6POxv1nok8V/EXFBsXUZNMpVCeZVQCfp0i14ccdi3ux/eR0dfGB0uZbwWDZyFUWvMreNc56nwlO/gJ02DwJy3PdHM/mP9v7+kvbE2CFAIAJ/ibh5CdTgdkqpu12Pjw8hwmV13xvnMjI2TshmIYgqBz1b9hNDaOyc3M/45TeQACwEbUHyMDecY/Yx1KjXlwM5nG4G2liPD/E9gxOGB1tOX2xssG9x9nkYTXBcyvM3oEbjIixnR4zZxBIPRva8yq9DgRr7zSaY6xxFh6xBE947IbUFfDI9+8oyOOTL++h6z5/K2M9R/Ceu16qX7pCtbxBtcevtNM36y1HpkFtbxCGaIGKCGAGKCGAKKKKATQGExpkgojFBGCghMEYKfPPatSMTUF9c73OmveOvjPoSeBdr0vi619D8R9P7j9JGvFZ9ZmCw2bSdnsHZYHeI8un37TE2Bhsx0HL7953WGpZQAJy7068Z+LuH0l+k8oU1l2ksierq0GiYxgEU1iKY50lKsgM0CkgqJI1FZrBxmzEfz+9847bWzsn0M9FqU5jbYwQqIQRFLw7Ox5U66z0T8K3tXcc0+onD43ClHIM7n8KEX4ta9swRQBxsSbn5L6zqxXHuceqCGACKasxEMEUCGGCKBiIohFAJTAYTBJBGCGAxgIDDGxgp4p29oFMfVUjRmV1Pg6qSD1zT2bE11RC7HQfPwHjPB+0OPepinqupXO10B/hHdFugHrM934vE+t/YGGCL4mdAMWi/mYDrMTC3NMZTa438pENnjiSTOW+u3M+OlTa1Lg4l2jtFDuYGcW2ySd14Ewjod5jnBx34xAMDYgCc7gKzWsTLWKJyx9TxZxe3ETeenGZVTtQCbBTM2rhrnWWsJgqQF2IHp9YdP8AVJ/zxz+jSPTaAfQgqZA5pg91h5XHtJKZU8BJ9VzjmO1tO1mkXYDFmnj6OulTMh6qbfMLL3bOkcin74St2MqhM7BAz5RlbkL96x4bxNc65OsN5/bXHt94pQ2JiC9BHb8xBv0JEvzozezrm1OXhQiCKNIwwQwBRRRQNMYIjFEAghgjBsUUUAw+01Tu5eGRz1zIvsx9TPGNtuzucxuVAsfPU+wnsXbJP+mdtbAENbflNt3jcCebbbwYXvad7U6cxf6zD8nsrf8AF9ljQ2DdsOh8CPQkSptLaJpmwUky/wBktaA8Gb3v9ZoY/ZwYXA1mF9dWZ8cji9t4ikVzKve13k2F/C2stYLbbuoZ0spbKG8eAPLfL2I2eXGRkuAdL8PK26XcBssWClVCjcABp68ZfywpnUvbUuAuTN3EYbuXlejhwpFhNfEKMgkyenqfY4XabOoJUEm9h5zl9q0cQrBg7MrDhmtcggghdRbeLz00UFIsRKVXZ1txMrPwazdfHFJstxTQl2znVgTcAX0vfjadVsbAuFBfWWqOzgDc6zSVwotJ1TznnjnO1VC6KTwYSt2dRN4GtivLef8AAmn2hOZAObD5An6SHZ6IitVY5VRSWbcO6OHOH8Tyd673YtLJRQHlf11l2ZXZfFfEwlBx+qmp8tN01Z15nJHBq9tpQwQykjFFFADFFFA0pghMEQIwGKKMAYIjBAM/tAmbDVR/Ix6gXHtPKhikqg02vqiuh/8AZD5i6j1nsGJW6EHiCD6T53xOLajUplbE0wUI4EZmzL1zH5TP8k7Gn49cvXYdmXKB0PAhhyIOmnynRpWvOR2Xj0Z0ZWBBBUr+oaXsR5ib6vacuo78WNNad5KEtK2HqSy7aRzxWrwMO2Z7cps1VugnIttenRXMzAXaxJ9LTRfbihL3Ft8JpnZbT3OVrS0hBExKW1UroGS982lwVPoRumkHsIS/VU+s4G6UatUw16krMYWdX5FbHnOyIdR3mI8ha3znOds9oZUWip1fKzgH8qqBYdSPkecXbDaz0mQU2CllYk2BNrgC1+vpOPq1WclmJZibkk3J0t9+UvOPvXLvfsj3D8MsTnwFMHehdOiubfK066ea/g/ij8Osh/S4YeGdQPdTPSp0Z8cl9KIRQiURQwQiAERRRQCUwQmCIBEYoDGAgMMEAqbSrhEYngpPQC5/brPnDaLku19+Zr9STPce2m0RToseJOUDdewzt7AdZ4RWckkneSSfMyNLzA2bifh1kf8AhYE+V7H5Ez1XfPIGno3ZjaHxaK3PeQZG6bj1FvnMdz+t/wAWuXjoaD2mhScGZKNHnFZdZl10en7R2Ujm/PfylNNnBWAubcvHwkGN23pYHrK9LaTrx1O4kXPQxrmf9vHSYTCKpzbzLFdhORpbcKGzMPEGa+G2iKg0MC1nn96suZE0cxmdtnHrRpM54DQc2OgEIz1eOF7X4nPiWA3IFTrvPzNukxwdPvlGVHLEsTckkk8ydTDTm8nHLb29d7+FWNCYl0O6onzRgR/uM9nUz5w7PY34WIpVL2Cuub+k91r9Nek+i8O9wDzEvNZ69TRCKIS0jDBCIAYoooBKYITBEAjY4xsYIyOq9heSTF7RY4JTY+BA4Hdw9QOsA83/ABI2qWdaYOuTMRws5uT4HT0PjPO3O+bW2K71azux1LAeVrKqi/IKfSYdQ75lb2tJORGZobE2maFQN+k6MOY5jxEzojFZ1UvHrNHEqyhlNwRcEcQY6oAwtOZ7P4kiivK1vKxInQUKl9bzmvy8defs6x8TsZM12v4axx2cg/UZvtTDDWVjsoH9RErtbZ3iT/qdrHfZtIsLLmPM/tNzA4YINAB5R9LBKnjHu9hFU61NfJOC9W04DtdtAvUCfpUX82PH09zOrr4gubDdz5zhtuj/AF28h7R/j+6Yfl+ZZcekawtEJu5kyHWe89gtpfEw6Kx1VBbxA7p6gi3pzngl+M9M/DXaQAycUa/mr6MPrKzfqNePWYYIRNElDFFADFFFEEpghMBgAjY6KMGMZwHajEtVrfDTcgNzyI0ufC5b0ncY6rkRmvaw3zg9lYbMlTEMNXzso/lClUF+Wubr4SaI82xKizkfxA+dlsT6zEcb50O0EKDLYAE6czqddeGnynPuNTM2kQxERQkaA+fy/wDsDddsBf8AQT+7/cZopUKnSRbGoFaaqd4GvnvMtVaU59fbXXn5IuYfHjibecsHFjmJimnG/BvF9VGs+0FH6r+WsqVKrP4CRU8PNDDUJJ9R0qNhOI7TC1c+Kr9Z6MU0nGdqsCWIdRcrofETTF5pl+Sdy5iosivJlOkiZZu5j05c5v8AZDaBpVxyYZT13fO059ZMt944fYgVnX01gawdEYcVHTTdLAnF9gNvCvRC3s6ABlvvtxA+fmT5Tske81l+Mz4hFCIwUUMUAkiiiiAQGGK0Awe1tTLhn1tmIF+sz8LQC4dF/wDHa/jkGvyl/thRLUNBezobeZyn/dfpIqf/AGxpc5AbbtSNRr7eEX9DyTbqD4yqN1mt4XGZfr6zmMQLNrxnX4/BvUrl0QsCP0qbWBI3203Si3ZHEvlLgJZQNdW08Bp85jrUnta5zb45Q75ubH2UzlWYEBSSAeO63tOk2Z2VVNWGY8zw8uU2VwQUaCRrf+Ns4/1Tw1Kwlh6csCnaEpMmzONOPFKTuljHrDpoqdGXFS0askMIRpEpYnC5tJoIIlSBuI2p2cN8yaHlOexODdTZlI9p64KAMZV2Mj71EvO7GWsSvHlBB+/KX8LRDoQdCP1eJva/McJ6FiOyVNv0iLZPZSktQ3XMMuqnUbxbfNJuWstY5O9cPsTatTDVlqJvBGYcHXkT16es942Xjlr01rUiGVhe24g8R58CPCY9PY1IoaeRQh0IAABA8pe2Zs2nh1K0UCBjchdLkaXPjKm/1vE/p+0626dYHfofH6yaZeYnjLNOqRvF5c/JlF/HqLgikaVQYpXYnlWTBIa2KAOUan2kJctvMm7kVM2rD1VHH0kLYk8F9Y3dGlpF3VzMQYqqTa/3wlFxcr1J6C31k+NOsrUn72nI/SK22HJ9P+Go0tGVKanlHVsZl3iQjEU28/SZfGslV6tASg+GmwaCncxkLYQ8Gi4cZNTDwfC0mg+HMjKWhxUZdalIBTms6CMGHEP16rqgqSXJpH1UtBYncIuD0kEkVYEpNJlwrHjD0eHIBLKOPvWNpYID8x+cso6Jujmai2EmGZ/5Rz4/4i+CqNZRvGp6wHH30EDMc1zyHuZWZOp13i3Tb6y3SW8ylqajyPvNTDvpHfSk5E5UCSUzeV2e8noCE9F8SOkUkaGPjPqpQXnLUp06klFSKK1EpjWMiLxpeUUirjD3vvlG4RLsfKRYl+8ZYwI1PkPrAp6NbDAzNxGylOo0M22kbCTZGstjB/4R03NHJVYaNNdllarSBi4f7f6qCpCFBgelaNXSMQ2tR1uJEUlvPeNaHFdZ9Sne0s0kW2sTAQEwmfp2/EjVAJFUxPKNKXj0oSkqru7QJhmO+adOiJMtMSR3/FbD4e0NR++enteXUSUMR+drcx7COJ0YW1HkfeXqVXSU7XP9v1hvaZ6v/Ssz4vivrLNKvMYvHpXtHKLlv/8AEaRTEOKhl/sj9VlakeK8r2jZnLxXF5aklVpSQyzTaVKXFaugLHnLODH5untIGOsnwe5v6vYAS74zz6sNImMlIkbrJaI7wMI14zPAE6XlapSlk1I1mvGFIiNIll1kREDlQFYrR5gBh0yRZIIARHZogKmTIZCpkyLEaVJm4m+dvP8AaairMyqO8fM/MxxGqkwy39B9Y6pTkmEXf0k7rJ16rPjNdJCyy/VSVSJK0SqYpMqwxkvCArHRGSiEhk6nQyBeMkXcY8igJPg/y+ZPvIk39ZPhfyjrNtfxnn+prRrCOiaStXdJVdZdeQVYBVYRt5K2+RwgNLGMcyQyN/rGcV2aAGEwCQs9RJQsVPhJljKkiSZRAsen38oEfMsjXjvPlvM1JmN9D7yp6nS5hBoZMwkOE/LJWka9VPFSvKt5ZxEppIWmURQ04o0v/9k=';

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 7rem;
    padding: 2.3rem 8rem 2.3rem 3rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    background-color: ${({ theme }) => theme.color.white};
    align-items: center;
    box-shadow: 0 0.5rem 0.8rem -0.6rem rgba(0, 0, 0, 0.2);
  `,
  Title: styled.span`
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.body};

    ${MEDIA_QUERIES.onTablet} {
      display: none;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
  ProfileBox: styled.div`
    display: flex;
    align-items: center;
    width: auto;
    justify-content: flex-start;

    ${MEDIA_QUERIES.onTablet} {
      width: 100%;
      justify-content: end;
    }
    ${MEDIA_QUERIES.onMobile} {
      width: 100%;
      justify-content: end;
    }
  `,
  ProfileName: styled.div`
    margin-left: 1.2rem;
    color: ${({ theme }) => theme.color.body};
    font-size: 1.6rem;
    font-weight: 500;
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
};

interface MypageHeaderProps {
  name: string;
}

function MypageHeader({ name }: MypageHeaderProps) {
  return (
    <S.Container>
      <S.Title>계정관리</S.Title>
      <S.ProfileBox>
        <AvatarImage src={avatarImgUrl} width="3.8rem" height="3.8rem" />
        <S.ProfileName>{name}</S.ProfileName>
      </S.ProfileBox>
    </S.Container>
  );
}

export default MypageHeader;
