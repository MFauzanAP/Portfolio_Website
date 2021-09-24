import Document, { Html, Head, Main, NextScript } from 'next/document';

//      Document class
class MyDocument extends Document {

        //      Render method
        render() {

                //      Return html
                return (
                        <Html lang="en">
                                <Head/>
                                <body>
                                        <Main/>
                                        <NextScript/>
                                </body>
                        </Html>
                );

        }

}

//      Export class
export default MyDocument